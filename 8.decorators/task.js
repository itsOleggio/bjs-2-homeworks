//Задача № 1
function cachingDecoratorNew(func) {
    const cache = new Map();
    const maxCacheSize = 5;

    return function(...args) {
        const hash = args.join(',');

        if (cache.has(hash)) {
            return `Из кеша: ${cache.get(hash)}`;
        }

        const result = func(...args);
        cache.set(hash, result);

        if (cache.size > maxCacheSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }

        return `Вычисляем: ${result}`;
    };
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    let firstCall = true;
    let lastArgs = null;

    function wrapper(...args) {
        wrapper.allCount++;

        if (firstCall) {
            func(...args);
            wrapper.count++;
            firstCall = false;
        } else {
            lastArgs = args;
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            firstCall = true;

            if (lastArgs !== null) {
                func(...lastArgs);
                lastArgs = null;
            }

            timeoutId = null;
        }, delay);
    }

    wrapper.count = 0;
    wrapper.allCount = 0;

    return wrapper;
}


