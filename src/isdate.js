// Copyright 2015 WebsiteHQ LLC

// ISDATE returns true when the `value` is a JavaScript date object.
export default function isdate(value) {
    return value && Object.prototype.toString.call(value) == '[object Date]';
};
