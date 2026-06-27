import { useRef, useEffect } from 'react';

export default function Ascii({ text }){
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let mouse = { x: -1000, y: -1000, radius: 50 };

        const returnSpeed = 0.1;
        const repelForce = 5;

        const fontSize = 10;
        ctx.font = '${fontSize}px monospace';
        const lines = text.split('\n');

        const maxChars = Math.max(...lines.map(line => line.length));
        const charWidth = fontSize * 0.6;
        canvas.width = maxChars * charWidth;
        canvas.height = lines.lenght * fontSize;

        const particles = [];
        lines.forEach((line, y) => {
            for(let x = 0; x < line.length; x++){
                const char = line[x];
                if(char !== ' ') {
                    particles.push({
                        char,
                        x: x * charWidth,
                        y: y * fontSize,
                        originX: x * charWidth,
                        originY: y * fontSize,
                    });
                }
            }
        });

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#6c757d';
            ctx.font = '${fontSize}px monospace';
            ctx.textBaseline = 'top';

            particles.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if(distance < mouse.radius){
                    const angle = Math.atan2(dy, dx);
                    p.x -= Math.cos(angle) * repelForce;
                    p.y -= Math.sin(angle) * repelForce;
                }

                p.x += (p.originX - p.x) * returnSpeed;
                p.y += (p.originY - p.y) * returnSpeed;

                ctx.fillText(p.char, p.x, p.y);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [text]);

    return (
        <div className="d-flex justify-content-center">
            <canvas
                ref={canvasRef}
                style={{ cursor: 'crosshair', maxWidth: '100%' }}
            />
        </div>
    );
}