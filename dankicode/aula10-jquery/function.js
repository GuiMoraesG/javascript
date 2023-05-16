const btn = document.querySelector('#btn-somarjs')

btn.addEventListener('click', () => {
    const v1 = document.querySelector('#v1')
    const v2 = document.querySelector('#v2')
    let res = document.querySelector('#res')

    res.value = Number(v1.value) + Number(v2.value)
})

$('#btn-somarjq').click(() => {
    const v1 = Number($('#v1').val())
    const v2 = Number($('#v2').val())

    $('#res').val(v1 + v2)
})