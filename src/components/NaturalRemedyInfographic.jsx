import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

// Registrar componentes de Chart.js
Chart.register(...registerables);

// --- UTILIDADES ---
// Función para envolver etiquetas largas (text-wrapping) en Chart.js
const wrapLabel = (label) => {
    if (typeof label !== 'string' || label.length <= 16) return label;
    const words = label.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        if ((currentLine + " " + words[i]).length <= 16) {
            currentLine += " " + words[i];
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);
    return lines;
};

// Opciones comunes para gráficos en modo oscuro
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    color: '#e5e7eb',
    borderColor: '#e5e7eb',
    plugins: {
        legend: {
            labels: { color: '#ffffff', font: { size: 12 } }
        },
        tooltip: {
            backgroundColor: 'rgba(14, 42, 41, 0.95)',
            titleColor: '#ffffff',
            bodyColor: '#e5e7eb',
            borderColor: 'rgba(255,255,255,0.2)',
            borderWidth: 1,
            callbacks: {
                title: function (tooltipItems) {
                    const item = tooltipItems[0];
                    const label = item.chart.data.labels[item.dataIndex];
                    return Array.isArray(label) ? label.join(' ') : label;
                }
            }
        }
    },
    scales: {
        r: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
            pointLabels: { color: '#e5e7eb', font: { size: 11 } },
            ticks: { backdropColor: 'transparent', color: '#9ca3af' }
        },
        y: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: '#d1d5db' }
        },
        x: {
            grid: { display: false },
            ticks: { color: '#d1d5db' }
        }
    }
};

// --- COMPONENTES UI ---

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            {title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
);

const GlassCard = ({ children, className = "" }) => (
    <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const StepCircle = ({ number, title, text, isLast }) => (
    <div className="flex relative pb-12 last:pb-0">
        <div className="flex-shrink-0 z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-900/50 border-2 border-emerald-400/30">
                {number}
            </div>
        </div>
        {!isLast && (
            <div className="absolute top-12 left-6 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 to-transparent -ml-px"></div>
        )}
        <div className="ml-6 pt-1">
            <h4 className="text-xl font-bold text-emerald-300 mb-2">{title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
        </div>
    </div>
);

// --- COMPONENTES DE GRÁFICOS ---

const RadarChart = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        if (chartRef.current) chartRef.current.destroy();

        const labels = ['Poder Antibacteriano', 'Poder Expectorante', 'Antiinflamatorio', 'Sabor Agradable', 'Calmante'];

        chartRef.current = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels.map(wrapLabel),
                datasets: [
                    {
                        label: 'Cebolla',
                        data: [4, 9, 8, 3, 4],
                        backgroundColor: 'rgba(16, 185, 129, 0.2)', // Emerald
                        borderColor: '#10b981',
                        borderWidth: 2,
                        pointBackgroundColor: '#10b981'
                    },
                    {
                        label: 'Ajo',
                        data: [10, 5, 7, 1, 2],
                        backgroundColor: 'rgba(132, 204, 22, 0.2)', // Lime
                        borderColor: '#84cc16',
                        borderWidth: 2,
                        pointBackgroundColor: '#84cc16'
                    },
                    {
                        label: 'Miel',
                        data: [6, 3, 6, 10, 10],
                        backgroundColor: 'rgba(6, 182, 212, 0.2)', // Cyan
                        borderColor: '#06b6d4',
                        borderWidth: 2,
                        pointBackgroundColor: '#06b6d4'
                    }
                ]
            },
            options: commonChartOptions
        });

        return () => chartRef.current && chartRef.current.destroy();
    }, []);

    return <canvas ref={canvasRef} />;
};

const DonutChart = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        if (chartRef.current) chartRef.current.destroy();

        chartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Cebolla Roja', 'Ajo Triturado', 'Miel Pura'],
                datasets: [{
                    data: [40, 10, 50],
                    backgroundColor: ['#10b981', '#84cc16', '#06b6d4'],
                    borderColor: '#0e2a29',
                    borderWidth: 4,
                    hoverOffset: 10
                }]
            },
            options: {
                ...commonChartOptions,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom', labels: { color: 'white', padding: 20 } },
                    tooltip: commonChartOptions.plugins.tooltip
                }
            }
        });

        return () => chartRef.current && chartRef.current.destroy();
    }, []);

    return <canvas ref={canvasRef} />;
};

const BarChart = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        if (chartRef.current) chartRef.current.destroy();

        const labels = ['Niños (2-5 años)', 'Niños (6-12 años)', 'Adultos (12+)'];

        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels.map(wrapLabel),
                datasets: [{
                    label: 'Cucharaditas (5ml) al día',
                    data: [2, 3, 5],
                    backgroundColor: ['#6ee7b7', '#34d399', '#10b981'],
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                ...commonChartOptions,
                plugins: { legend: { display: false }, tooltip: commonChartOptions.plugins.tooltip }
            }
        });

        return () => chartRef.current && chartRef.current.destroy();
    }, []);

    return <canvas ref={canvasRef} />;
};

const LineChart = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        if (chartRef.current) chartRef.current.destroy();

        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Día 0', 'Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'],
                datasets: [{
                    label: 'Severidad de la Tos',
                    data: [9, 7, 5, 3, 2, 1],
                    borderColor: '#2dd4bf',
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                        gradient.addColorStop(0, 'rgba(45, 212, 191, 0.5)');
                        gradient.addColorStop(1, 'rgba(45, 212, 191, 0)');
                        return gradient;
                    },
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#111827',
                    pointBorderColor: '#2dd4bf',
                    pointBorderWidth: 2
                }]
            },
            options: {
                ...commonChartOptions,
                scales: {
                    ...commonChartOptions.scales,
                    y: {
                        ...commonChartOptions.scales.y,
                        beginAtZero: true,
                        max: 10,
                        title: { display: true, text: 'Intensidad (1-10)', color: '#9ca3af' }
                    }
                }
            }
        });

        return () => chartRef.current && chartRef.current.destroy();
    }, []);

    return <canvas ref={canvasRef} />;
};

// --- COMPONENTE PRINCIPAL ---

export default function NaturalRemedyInfographic() {
    return (
        <div className="min-h-screen bg-[#0e2a29] text-white font-sans selection:bg-emerald-500 selection:text-white pb-20">

            {/* HEADER HERO */}
            <header className="relative w-full overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-teal-500/20 rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 border border-emerald-500/30 rounded-full bg-emerald-900/30 backdrop-blur-sm">
                        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Investigación Remedio Natural</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
                        Cómo quitar la tos con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Remedio Natural</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Un análisis profundo de cómo la <span className="text-emerald-400 font-semibold">Cebolla Roja</span>, el <span className="text-lime-400 font-semibold">Ajo</span> y la <span className="text-cyan-400 font-semibold">Miel</span> trabajan en sinergia biológica.
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">

                {/* SECCIÓN 1: INGREDIENTES */}
                <section>
                    <SectionTitle
                        title="La Tríada Bioactiva"
                        subtitle="Desglosando los componentes moleculares que combaten la infección."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="border-t-4 border-t-emerald-500">
                            <div className="text-5xl mb-6 text-center">🧅</div>
                            <h3 className="text-2xl font-bold text-center mb-2 text-emerald-400">Cebolla Roja</h3>
                            <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-widest font-semibold">Expectorante</p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start"><span className="text-emerald-500 mr-2">✦</span> <strong>Quercetina:</strong> Antiinflamatorio potente.</li>
                                <li className="flex items-start"><span className="text-emerald-500 mr-2">✦</span> <strong>Azufre:</strong> Rompe la mucosidad.</li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="border-t-4 border-t-lime-500">
                            <div className="text-5xl mb-6 text-center">🧄</div>
                            <h3 className="text-2xl font-bold text-center mb-2 text-lime-400">Ajo Crudo</h3>
                            <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-widest font-semibold">Antibiótico</p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start"><span className="text-lime-500 mr-2">✦</span> <strong>Alicina:</strong> Antimicrobiano activo.</li>
                                <li className="flex items-start"><span className="text-lime-500 mr-2">✦</span> <strong>Inmuno-boost:</strong> Estimula defensas.</li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="border-t-4 border-t-cyan-500">
                            <div className="text-5xl mb-6 text-center">🍯</div>
                            <h3 className="text-2xl font-bold text-center mb-2 text-cyan-400">Miel Pura</h3>
                            <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-widest font-semibold">Suavizante</p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start"><span className="text-cyan-500 mr-2">✦</span> <strong>Enzimas:</strong> Antiséptico local.</li>
                                <li className="flex items-start"><span className="text-cyan-500 mr-2">✦</span> <strong>Barrera:</strong> Calma la irritación.</li>
                            </ul>
                        </GlassCard>
                    </div>
                </section>

                {/* SECCIÓN 2: RADAR CHART */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Sinergia Perfecta</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            Visualiza cómo cada ingrediente compensa las debilidades de los otros. Mientras el ajo ataca la bacteria pero sabe fuerte, la miel suaviza el sabor y protege la garganta.
                        </p>
                        <div className="bg-emerald-900/30 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                            <p className="text-emerald-200 text-sm">
                                <strong>Dato Clave:</strong> La alicina del ajo se degrada con el calor, por eso este remedio utiliza maceración en frío (ósmosis).
                            </p>
                        </div>
                    </div>
                    <div className="h-[400px] w-full bg-white/5 rounded-2xl p-4 flex items-center justify-center border border-white/10 relative">
                        <div className="absolute top-4 right-4 flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                            <span className="w-3 h-3 rounded-full bg-lime-500"></span>
                            <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                        </div>
                        <div className="w-full h-full relative">
                            <RadarChart />
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 3: RECETA Y PASOS */}
                <section>
                    <SectionTitle title="Protocolo de Preparación" subtitle="La ciencia de la extracción por ósmosis." />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Gráfico Donut */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-full max-w-sm aspect-square">
                                {/* Texto central flotante */}
                                <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                                    <span className="text-3xl font-bold text-white">100%</span>
                                    <span className="text-emerald-400 text-xs tracking-widest uppercase">Natural</span>
                                </div>
                                <DonutChart />
                            </div>
                            <div className="mt-8 grid grid-cols-3 gap-4 text-center w-full">
                                <div className="p-3 bg-white/5 rounded-lg border border-emerald-500/20">
                                    <p className="text-xs text-gray-400 uppercase">Cebolla</p>
                                    <p className="text-lg font-bold text-emerald-400">1 Unid.</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg border border-lime-500/20">
                                    <p className="text-xs text-gray-400 uppercase">Ajo</p>
                                    <p className="text-lg font-bold text-lime-400">3 Dientes</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg border border-cyan-500/20">
                                    <p className="text-xs text-gray-400 uppercase">Miel</p>
                                    <p className="text-lg font-bold text-cyan-400">Cubrir</p>
                                </div>
                            </div>
                        </div>

                        {/* Pasos Visuales */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
                            <StepCircle
                                number="1"
                                title="Corte y Activación"
                                text="Pica la cebolla finamente. Machaca el ajo y déjalo reposar 10 minutos para activar la alicina al máximo."
                            />
                            <StepCircle
                                number="2"
                                title="Capas y Miel"
                                text="Coloca todo en un frasco de vidrio. Vierte la miel cruda lentamente hasta cubrir completamente los sólidos."
                            />
                            <StepCircle
                                number="3"
                                title="Maceración (8-12h)"
                                text="Deja reposar toda la noche. La miel extraerá los jugos de la cebolla creando un jarabe líquido natural."
                            />
                            <StepCircle
                                number="4"
                                title="Filtrado"
                                text="Cuela el líquido resultante. Este 'oro líquido' es tu jarabe. Conservar en nevera máximo 3 días."
                                isLast={true}
                            />
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 4: DATOS DE USO */}
                <section className="bg-gradient-to-b from-emerald-900/40 to-transparent p-8 rounded-3xl border border-white/5">
                    <SectionTitle title="Guía de Administración" subtitle="Dosis seguras y resultados esperados." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-emerald-300 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-emerald-500 mr-3 rounded-full"></span>
                                Dosis Diaria (Cucharaditas)
                            </h3>
                            <div className="h-64 bg-black/20 rounded-xl p-4 border border-white/5">
                                <BarChart />
                            </div>
                            <p className="text-xs text-red-400 mt-4 text-center font-bold bg-red-900/20 p-2 rounded">
                                ⚠️ Precaución: No administrar miel a menores de 1 año.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-cyan-300 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-cyan-500 mr-3 rounded-full"></span>
                                Proyección de Alivio
                            </h3>
                            <div className="h-64 bg-black/20 rounded-xl p-4 border border-white/5">
                                <LineChart />
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            {/* FOOTER - DISCLAIMER ALERT */}
            <footer className="mt-24 px-6 relative z-10 max-w-4xl mx-auto pb-12">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start gap-4 backdrop-blur-md">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-yellow-500 font-bold text-lg mb-2">Importante: Descargo de Responsabilidad</h4>
                        <p className="text-yellow-200/80 text-sm leading-relaxed">
                            Esta información tiene fines educativos únicamente y explora usos tradicionales de ingredientes naturales.
                            <strong> No sustituye el consejo médico profesional</strong>. Si tienes síntomas persistentes o condiciones preexistentes, consulta a tu médico antes de probar remedios caseros.
                        </p>
                    </div>
                </div>


            </footer>

        </div>
    );
}
