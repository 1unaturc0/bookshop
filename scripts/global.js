"use strict"

const truncate = (str, maxLength) =>
    str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;