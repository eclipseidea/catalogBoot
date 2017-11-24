'use strict';

function RedirectAttributes(useStorage) {
    if (useStorage && !(useStorage instanceof Storage)) {
        throw new Error('Given storage is not inherit Storage superclass');
    }

    const storage = useStorage || localStorage;
    const cache = {};

    this.addFlashMessage = function (key, value) {
        if (!key || !value) {
            throw new Error('Key and value must be set');
        }
        storage.setItem(key, value);
    };

    this.getFlashMessage = function (key) {
        if (!key) return null;

        if (cache.hasOwnProperty(key)) return cache[key];

        return fetchItemFromStorageAndCacheIt(key);
    };

    /**
     * @private
     */
    function fetchItemFromStorageAndCacheIt(key) {
        const value = storage.getItem(key);
        if (!value) return null;
        cache[key] = value;
        storage.removeItem(key);
        return value;
    }

    this.changeStorage = function (anotherStorage) {
        return new RedirectAttributes(anotherStorage);
    }
}

// Use default storage (LocalStorage)
window.RedirectAttributes = new RedirectAttributes();
