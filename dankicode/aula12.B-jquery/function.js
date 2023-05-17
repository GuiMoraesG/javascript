$('#texto').keyup(() => {
    $('#res').text($('#texto').val())
})

// document.addEventListener('keyup', e => {
//     const el = e.target

//     if(el.classList.contains('texto')) {
//         let input = document.querySelector('#texto')
//         const p = document.querySelector('#res')
//         p.innerHTML = input.value
//     }
// })