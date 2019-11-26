function MyPromise (executor) {
    var self = this;
    self.status = 'pending';
    self.resolveValue = null;
    self.rejectReason = null;
    self.ResolveCallBackList = [];
    self.RejectCallBackList = [];

    function resolve (value) {
        if (self.status === 'pending') {
            self.status = 'Fulfilled';
            self.resolveValue = value;
            self.ResolveCallBackList.forEach(function (ele) {
                ele();
            });
        }
    }

    function reject (reason) {
        if (self.status === 'pending') {
            self.status = 'Rejected';
            self.rejectReason = reason;
            self.RejectCallBackList.forEach(function (ele) {
                ele();
            });
        }
    }

    try {
        executor(resolve, reject);
    }catch(e) {
        reject(e);
    }
};
function ResolutionRetrunPromise (nextPromise, returnValue, res, rej) {
    if (returnValue instanceof MyPromise) {
        // Promise 对象
        returnValue.then(function (val) {
            res(val);
        }, function (reason) {
            rej(reason)
        });
    }else {
        res(returnValue);
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (!onFulfilled) {
        onFulfilled = function (val) {
            return val;
        }
    }
    if (!onRejected) {
        onRejected = function (reason) {
            throw new Error(reason);
        }
    }
    var self = this;

    var nextPromise = new MyPromise(function (res, rej) {
        if (self.status === 'Fulfilled') {
            setTimeout(function () {
                try {
                    // var nextResolveValue = onFulfilled(self.resolveValue);
                    // res(nextResolveValue);
                    var nextResolveValue = onFulfilled(self.resolveValue);
                    ResolutionRetrunPromise(nextPromise, nextResolveValue, res, rej);
                }catch(e) {
                    rej(e);
                }

            }, 0);
        }

        if (self.status === 'Rejected') {
            setTimeout(function () {
                try {
                    var nextRejectValue = onRejected(self.rejectReason);
                    ResolutionRetrunPromise(nextPromise, nextRejectValue, res, rej);
                }catch(e) {
                    rej(e);
                }

            }, 0);
        }

        //
        if (self.status === 'pending') {
            self.ResolveCallBackList.push(function () {
                try {
                    var nextResolveValue = onFulfilled(self.resolveValue);
                    ResolutionRetrunPromise(nextPromise, nextResolveValue, res, rej);
                }catch(e) {
                    rej(e);
                }
            });

            self.RejectCallBackList.push(function () {
                setTimeout(function () {
                    try {
                        var nextRejectValue = onRejected(self.rejectReason);
                        ResolutionRetrunPromise(nextPromise, nextRejectValue, res, rej);
                    }catch(e) {
                        rej(e);
                    }
                }, 0);
            });
        }
    });
    return nextPromise;
};

MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
};

MyPromise.prototype.finally = function (callback) {
    return this.then(function (data) {
        callback();
        return data;
    }, function (reason) {
        callback();
        throw reason;
    });
};


MyPromise.all = function (promiseArr) {
    // console.log(0)
    return new MyPromise(function (res, rej) {
        // promiseArr 所有的值都看一下， 如果全都是成功 res
        // rej
        // then
        var arr = [];
        var times = 0;
        function processResult (index, result) {
            arr[index] = result;
            times++;
            // arr.length == promiseArr.length
            if (times ==  promiseArr.length) {
                res(arr);
            }
        };

        for (let i = 0; i < promiseArr.length; i++) {
            var oPromise = promiseArr[i];
            if (typeof oPromise.then == 'function') {
                oPromise.then(function (val) {
                    // val
                    // 我要存一下这个val val -> arr -> i
                    processResult(i, val)
                }, function (reason) {
                    // reason
                    rej(reason);
                })
            }else {
                processResult(i, oPromise);
            }
        }
    });
};


MyPromise.race = function(promiseArr) {
    return new MyPromise(function (resolve, reject) {
        promiseArr.forEach(function (promise, index) {
            promise.then(resolve, reject);
        });
    });
};

MyPromise.reject = function (reason) {
    return new MyPromise(function (resolve, reject) {
        reject(reason);
    });
};


MyPromise.resolve = function (val) {
    return new MyPromise(function (resolve, reject) {
        resolve(val);
    });
};
