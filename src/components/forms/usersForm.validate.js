export const requiredField = (value) => {
    if(!value) {
        return 'This field should not be empty'
    } else {
        return null
    }
}
