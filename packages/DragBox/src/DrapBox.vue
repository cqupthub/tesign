<template>
    <div ref="drag" class="drag" @mousedown="getDragBox" @mouseup="completeMoveDragBox">
        <slot>drag-box test</slot>
    </div>
</template>

<script>
    export default {
        name: 'TDragBox',
        data() {
            return {
                positionX: 0,
                positionY: 0
            };
        },

        components: {},

        methods: {
            getDragBox(e) {
                e = e || window.event;
                console.log(e.clientX, this.$refs.drag.offsetLeft);

                this.positionX = e.clientX - this.$refs.drag.offsetLeft;
                this.positionY = e.clientY - this.$refs.drag.offsetTop;

                this.addClass(this.$refs.drag, 'drag-select');
                document.onmousemove = e => {
                    this.moveGragBox(e)
                }
            },
            moveGragBox(e) {
                e = e || window.event;

                let left = e.clientX - this.positionX;
                let top = e.clientY - this.positionY;

                if (left < 0) left = 0;
                if (left > window.innerWidth - this.$refs.drag.offsetWidth) left = window.innerWidth - this.$refs.drag.offsetWidth;

                if (top < 0) top = 0;
                if (top > window.innerHeight - this.$refs.drag.offsetHeight) top = window.innerHeight - this.$refs.drag.offsetHeight;

                this.$refs.drag.style.left = left + 'px';
                this.$refs.drag.style.top = top + 'px';
            },
            completeMoveDragBox(e) {
                this.removeClass(this.$refs.drag, 'drag-select');
                document.onmousemove = null;
                document.onmouseup = null;
            },
            hasClass(el, className) {
                let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
                return reg.test(el.className)
            },
            addClass(el, className) {
                if (this.hasClass(el, className)) {
                    return
                }

                let newClass = el.className.split(' ');
                newClass.push(className);
                el.className = newClass.join(' ')
            },
            removeClass(ele, cls) {
                if (this.hasClass(ele, cls)) {
                    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
                    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
                        newClass = newClass.replace(' ' + cls + ' ', ' ');
                    }
                    ele.className = newClass.replace(/^\s+|\s+$/g, '');
                }
            },
        },

    }
</script>