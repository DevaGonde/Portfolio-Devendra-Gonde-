document.addEventListener('DOMContentLoaded', () => {
    let top = document.querySelector('#top-div');
    let bottom = document.querySelector('#bottom-div');
    
    function applyHoverEffects() {
        // Remove any existing event listeners
        top.replaceWith(top.cloneNode(true));
        bottom.replaceWith(bottom.cloneNode(true));
        top = document.querySelector('#top-div');
        bottom = document.querySelector('#bottom-div');

        if (window.innerWidth >= 1256 || window.innerWidth <= 811) {
            top.addEventListener('mouseover', function () {
                bottom.style.height = '100px';
                top.style.height = '500px';
                // document.getElementById('top-img').style.height='250px'
                document.getElementById('bottom-img').style.height='100px'
                
            });

            top.addEventListener('mouseout', function () {
                bottom.style.height = '300px';
                top.style.height = '300px';
                // document.getElementById('top-img').style.height=''
                document.getElementById('bottom-img').style.height=''
            });

            bottom.addEventListener('mouseover', function () {
                top.style.height = '100px';
                bottom.style.height = '500px';
                document.getElementById('top-img').style.height='100px'
                // document.getElementById('bottom-img').style.height='250px'
            });

            bottom.addEventListener('mouseout', function () {
                bottom.style.height = '300px';
                top.style.height = '300px';
                document.getElementById('top-img').style.height=''
                // document.getElementById('bottom-img').style.height=''
            });
        } else if (window.innerWidth <= 1256 && window.innerWidth >= 811) {
            top.addEventListener('mouseover', function () {
                bottom.style.width = '';
                top.style.width = '';
                
            });

            top.addEventListener('mouseout', function () {
                bottom.style.width = '';
                top.style.width = '';
            });

            bottom.addEventListener('mouseover', function () {
                top.style.width = '';
                bottom.style.width = '';
            });

            bottom.addEventListener('mouseout', function () {
                bottom.style.width = '';
                top.style.width = '';
            });
        }
    }
    
    applyHoverEffects();
    window.addEventListener('resize', applyHoverEffects);
});
