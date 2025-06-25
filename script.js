function dowloadPPDF() {
    const element = document.querySelector('.container-lg');
    const opt = {
        margin:       [0.1, 0.1],
        filename:     'Hoja_de_vida_Juan_Jose_Toro.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true }, // <-- corregido "scro" a "useCORS"
        jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
