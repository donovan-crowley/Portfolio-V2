import { useRef, useEffect } from 'react';

export default function Ascii({ text, fontSize = 5}){
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let mouse = { x: -1000, y: -1000, radius: 50 };

        const returnSpeed = 0.1;
        const repelForce = 15;
        const friction = 0.85;

        const accentColor = '#00f2ff';

        ctx.font = `${fontSize}px monospace`;

        const rawLines = (text || '').split('\n');

        let startIdx = 0;
        while(startIdx < rawLines.length && rawLines[startIdx].trim() === ''){
            startIdx++;
        }
        let endIdx = rawLines.length - 1;
        while(endIdx >= 0 && rawLines[endIdx].trim() === ''){
            endIdx--;
        }

        if(startIdx > endIdx) return;

        let lines = rawLines.slice(startIdx, endIdx + 1).map(line => line.trimEnd());

        const maxChars = Math.max(...lines.map(line => line.length));
        const charWidth = fontSize * 0.6;
        
        canvas.width = maxChars * charWidth;
        canvas.height = lines.length * fontSize;

        const particles = [];
        lines.forEach((line, y) => {
            for(let x = 0; x < line.length; x++){
                if(line[x] !== ' ') {
                    particles.push({
                        char: line[x],
                        x: x * charWidth,
                        y: y * fontSize,
                        originX: x * charWidth,
                        originY: y * fontSize,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        });

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = accentColor;
            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = 'top';

            particles.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if(distance < mouse.radius){
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    p.vx -= Math.cos(angle) * force * repelForce;
                    p.vy -= Math.sin(angle) * force * repelForce;
                }

                p.vx += (p.originX - p.x) * returnSpeed;
                p.vy += (p.originY - p.y) * returnSpeed;

                p.vx *= friction;
                p.vy *= friction;

                p.x += p.vx;
                p.y += p.vy;

                ctx.fillText(p.char, p.x, p.y);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            
            mouse.x = (e.clientX - rect.left) * scaleX;
            mouse.y = (e.clientY - rect.top) * scaleY;
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
    }, [text, fontSize]);

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', overflow: 'hidden' }}>
            <canvas
                ref={canvasRef}
                style={{ 
                    cursor: 'crosshair', 
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block'
                }}
            />
        </div>
    );
}