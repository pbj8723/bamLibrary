// const hell = () => {
//     return "1"
// }
// const Hello = {
//     hell
// }

// export default Hello

const to_bool = (bool_int) => {
    switch (bool_int) {
        case 0:         return false
        case 1:         return true
        case '0':         return false
        case '1':         return true
        case 'true':    return true
        case 'false':   return false
        case true:      return true
        case false:     return false
    }
};

const prod = {
    to_bool
};

export default prod;