import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Droplet, Thermometer, Activity, Coffee, Info, ArrowRight, Check } from 'lucide-react';

// Registrar componentes de Chart.js
Chart.register(...registerables);

// --- UTILIDADES ---

// Función para ajustar etiquetas largas en los gráficos (Label Wrapping)
const formatLabels = (labels) => {
    return labels.map(label => {
        if (label.length > 16) {
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
        }
        return label;
    });
};

// Configuración común para Tooltips
const commonTooltipOptions = {
    backgroundColor: 'rgba(14, 42, 41, 0.9)',
    titleColor: '#34d399', // emerald-400
    bodyColor: '#ffffff',
    borderColor: 'rgba(52, 211, 153, 0.3)',
    borderWidth: 1,
    padding: 10,
    callbacks: {
        title: function (tooltipItems) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
                return label.join(' ');
            } else {
                return label;
            }
        }
    }
};

// Estilos de los ejes para modo oscuro
const darkScaleOptions = {
    ticks: { color: '#d1d5db' }, // gray-300
    grid: { color: 'rgba(255, 255, 255, 0.1)' }
};

// --- COMPONENTES DE GRÁFICOS ---

const RatioChart = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) chartRef.current.destroy();

        const ctx = canvasRef.current.getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: formatLabels(['Panela (Sólida)', 'Agua (Líquida)', 'Especias (Opcional)']),
                datasets: [{
                    data: [50, 45, 5],
                    backgroundColor: ['#d97706', '#06b6d4', '#10b981'], // amber, cyan, emerald
                    borderColor: '#0e2a29',
                    borderWidth: 2,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#d1d5db', padding: 20 }
                    },
                    tooltip: commonTooltipOptions,
                }
            }
        });

        return () => chartRef.current?.destroy();
    }, []);

    return <div className="relative w-full h-64"><canvas ref={canvasRef} /></div>;
};

const TempChart = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) chartRef.current.destroy();

        const ctx = canvasRef.current.getContext('2d');

        // Gradiente para la línea
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(52, 211, 153, 0.5)'); // emerald
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0.0)'); // cyan

        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: formatLabels(['Inicio', 'Ebullición', 'Punto de Hilo', 'Bola Suave', 'Bola Dura', 'Caramelo']),
                datasets: [{
                    label: 'Temperatura (°C)',
                    data: [25, 100, 108, 114, 125, 150],
                    borderColor: '#22d3ee', // cyan-400
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#10b981', // emerald
                    pointBorderColor: '#ffffff',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        ...darkScaleOptions,
                        title: { display: true, text: 'Temperatura (°C)', color: '#9ca3af' }
                    },
                    x: darkScaleOptions
                },
                plugins: {
                    legend: { display: false },
                    tooltip: commonTooltipOptions
                }
            }
        });

        return () => chartRef.current?.destroy();
    }, []);

    return <div className="relative w-full h-72"><canvas ref={canvasRef} /></div>;
};

const NutritionChart = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) chartRef.current.destroy();

        const ctx = canvasRef.current.getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: formatLabels(['Calcio (mg)', 'Hierro (mg)', 'Potasio (mg)']),
                datasets: [
                    {
                        label: 'Panela',
                        data: [80, 2.5, 125],
                        backgroundColor: '#10b981', // emerald-500
                        borderRadius: 6,
                        barPercentage: 0.6
                    },
                    {
                        label: 'Azúcar Refinada',
                        data: [1, 0.1, 2],
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 6,
                        barPercentage: 0.6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        ...darkScaleOptions,
                        beginAtZero: true,
                        title: { display: true, text: 'mg por 100g', color: '#9ca3af' }
                    },
                    x: darkScaleOptions
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#d1d5db' }
                    },
                    tooltip: commonTooltipOptions
                }
            }
        });

        return () => chartRef.current?.destroy();
    }, []);

    return <div className="relative w-full h-64"><canvas ref={canvasRef} /></div>;
};

// --- COMPONENTES DE UI ---

const Card = ({ children, className = "" }) => (
    <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 ${className}`}>
        {children}
    </div>
);

const Badge = ({ children }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 mb-4">
        {children}
    </span>
);

const StepCard = ({ number, icon: Icon, title, desc }) => (
    <div className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1">
        <div className="absolute -top-4 -left-2 bg-gradient-to-br from-emerald-500 to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
            {number}
        </div>
        <div className="flex flex-col items-center text-center mt-4">
            <div className="p-4 bg-emerald-500/10 rounded-full mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <Icon className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
            <p className="text-gray-300 text-sm font-light leading-relaxed">{desc}</p>
        </div>
    </div>
);

// --- APP PRINCIPAL ---

export default function MeladoArticle() {
    return (
        <div className="font-sans selection:bg-emerald-500/30">

            {/* Hero Section */}
            <header className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[96px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <Badge>Gastronomía & Ciencia</Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        El Arte del <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Melado de Panela</span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Una inmersión visual en la transformación de la caña de azúcar en oro líquido. Descubre la ciencia detrás de la consistencia perfecta.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 space-y-24 pb-20">

                {/* Sección 1: Introducción y Proporción */}
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">La Esencia del Melado</h2>
                            <p className="text-gray-300 mb-6 font-light leading-relaxed">
                                El melado es un almíbar puro y complejo, resultado de la reducción controlada de la panela en agua. A diferencia de los siropes comerciales, este conserva los minerales traza de la caña.
                                Es el "punto dulce" perfecto para acompañar lácteos frescos como la cuajada, endulzar un café de origen o dar brillo a una salsa.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-emerald-500/20 rounded">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <p className="text-sm text-gray-400"><strong className="text-emerald-300">Natural:</strong> Sin refinamientos químicos.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-emerald-500/20 rounded">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <p className="text-sm text-gray-400"><strong className="text-emerald-300">Versátil:</strong> Desde bebidas hasta salsas gourmet.</p>
                                </div>
                            </div>
                        </div>

                        <Card>
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 text-center">
                                La Proporción Áurea
                            </h3>
                            <RatioChart />
                            <p className="text-center text-xs text-gray-500 mt-4">
                                *Equilibrio ideal para una textura fluida pero con cuerpo.
                            </p>
                        </Card>
                    </div>
                </section>

                {/* Sección 2: El Proceso */}
                <section>
                    <div className="text-center mb-12">
                        <Badge>Paso a Paso</Badge>
                        <h2 className="text-4xl font-bold text-white mt-2">Alquimia en 4 Fases</h2>
                        <p className="text-gray-400 font-light mt-4">El control de la temperatura es la clave del éxito.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StepCard
                            number="1"
                            icon={Info}
                            title="Preparar"
                            desc="Trocear la panela en fragmentos pequeños uniformes. Esto asegura una disolución rápida y evita puntos calientes."
                        />
                        <StepCard
                            number="2"
                            icon={Droplet}
                            title="Disolver"
                            desc="Combinar con agua fría y especias (canela, clavos). Llevar a fuego medio hasta que la panela se funda totalmente."
                        />
                        <StepCard
                            number="3"
                            icon={Thermometer}
                            title="Reducir"
                            desc="Mantener un hervor suave. No revolver bruscamente para evitar la cristalización del azúcar en los bordes."
                        />
                        <StepCard
                            number="4"
                            icon={Activity}
                            title="Punto"
                            desc="Verificar la consistencia deseada (hilo, bola). Retirar especias y dejar enfriar para que adquiera cuerpo."
                        />
                    </div>
                </section>

                {/* Sección 3: Ciencia y Temperatura */}
                <section className="bg-gradient-to-b from-transparent to-black/20 rounded-3xl p-8 border border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="order-2 lg:order-1">
                            <Card className="h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-white">Curva de Temperatura</h3>
                                    <div className="flex gap-2">
                                        <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                        <span className="text-xs text-gray-400">Puntos Clave</span>
                                    </div>
                                </div>
                                <TempChart />
                            </Card>
                        </div>

                        <div className="order-1 lg:order-2 flex flex-col justify-center">
                            <Badge>Física Culinaria</Badge>
                            <h2 className="text-3xl font-bold text-white mb-6">Temperatura vs. Textura</h2>
                            <p className="text-gray-300 font-light mb-8">
                                A medida que el agua se evapora, la concentración de azúcar aumenta y eleva el punto de ebullición. Cada grado cuenta.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-emerald-400">
                                    <h4 className="text-emerald-300 font-bold text-sm">Punto de Hilo (105°C - 110°C)</h4>
                                    <p className="text-gray-400 text-sm mt-1">Ideal para endulzar bebidas o bañar frutas frescas.</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-cyan-400">
                                    <h4 className="text-cyan-300 font-bold text-sm">Bola Suave (112°C - 115°C)</h4>
                                    <p className="text-gray-400 text-sm mt-1">Perfecto para salsas espesas, rellenos o acompañar cuajadas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección 4: Nutrición y Usos */}
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Columna Izquierda: Gráfico Nutricional */}
                        <div className="lg:col-span-2">
                            <Card>
                                <h3 className="text-xl font-bold text-white mb-2">Perfil Mineral</h3>
                                <p className="text-gray-400 text-sm mb-6">Comparativa de micronutrientes: Panela vs. Azúcar Refinada</p>
                                <NutritionChart />
                            </Card>
                        </div>

                        {/* Columna Derecha: Usos Sugeridos (Sin harinas) */}
                        <div className="lg:col-span-1 space-y-4">
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6">Usos Recomendados</h3>

                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4 hover:bg-white/10 transition-colors cursor-default">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-amber-500/20 rounded-lg">
                                                <Coffee className="w-6 h-6 text-amber-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">Bebidas Calientes</h4>
                                                <p className="text-xs text-gray-400">Sustituto superior para café y té.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4 hover:bg-white/10 transition-colors cursor-default">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-cyan-500/20 rounded-lg">
                                                <Droplet className="w-6 h-6 text-cyan-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">Lácteos Frescos</h4>
                                                <p className="text-xs text-gray-400">El maridaje clásico con cuajada.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 p-6 rounded-2xl border border-emerald-500/30 text-center">
                                    <p className="text-emerald-300 font-medium mb-2">¿Sabías qué?</p>
                                    <p className="text-gray-300 text-sm italic">
                                        "El melado oscuro contiene más antioxidantes debido a la mayor concentración de melaza."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="border-t border-white/10 bg-[#0b2221] py-12 text-center">
                <div className="container mx-auto px-6">
                    <p className="text-emerald-400 font-bold text-lg mb-2">Melado & Ciencia</p>
                    <p className="text-gray-500 text-sm">Visualización de Datos Gastronómicos</p>
                </div>
            </footer>
        </div>
    );
}
