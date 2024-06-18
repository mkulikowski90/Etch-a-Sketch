function boardCreation(rows = 10,cols = 10){
    const container = document.getElementById('container');
    container.innerHTML = '';

    const containerWidth = container.clientWidth;
    const itemSize = containerWidth / cols;

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;
        container.appendChild(div);

    }
}

boardCreation()