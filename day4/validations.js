const BirthYear = (year) => {
    if (!year) return false
    return year >= 1920 && year <= 2002
}

const IssueYear = (year) => {
    if (!year) return false
    return year >= 2010 && year <= 2020
}

const ExpirationYear = (year) => {
    if (!year) return false
    return year >= 2020 && year <= 2030
}

const Height = (height) => {
    if (!height) return false

    const heightType = height.slice(height.length - 2)
    const heightNum = Number(height.slice(0, -2))
    
    return (
        (heightType === 'cm' && heightNum >= 150 && heightNum <= 193) ||
        (heightType === 'in' && heightNum >= 59 && heightNum <= 76)
    )
}

const HairColor = (color) => {
    if (!color) return false

    const regexp = /^#[a-zA-Z|0-9]{6}$$/g
    return regexp.test(color)
}

const EyeColor = (color) => {
    if (!color) return false

    const allowed = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
    return allowed.includes(color.toLowerCase())
}

const PassportID = (id) => {
    if (!id) return false

    const regexp = /^\d{9}$/g
    return regexp.test(id)
}

module.exports = {
    BirthYear,
    IssueYear,
    ExpirationYear,
    Height,
    HairColor,
    EyeColor,
    PassportID
}