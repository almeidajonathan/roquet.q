export default function Modal() {
    function open() {
        console.log('ADICIONOU A CLASSE ACTIVE')
        document.querySelector('.modal-wrapper').classList.add('active')
    }
    function close() {
        
    }

    return{
        open,
        close
    }
}