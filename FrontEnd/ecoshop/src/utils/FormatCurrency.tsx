export const FormatCurrency = (value: number) => {
    return new Intl.NumberFormat('BRA', {
        currency:'BRL',
        style: 'currency'
    }).format(value)
}
