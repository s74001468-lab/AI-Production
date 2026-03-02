import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock,
  Image as ImageIcon,
  Loader2,
  MessageCircleQuestion,
  Play,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Video,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [loadingText, setLoadingText] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setLoadingText('Анализируем карточку товара...');

    // Симуляция работы AI (Иллюзия труда)
    setTimeout(() => {
      setLoadingText('Извлекаем исходные фотографии...');
    }, 1500);

    setTimeout(() => {
      setLoadingText('Подготавливаем AI-модели (Sora 2)...');
    }, 3000);

    setTimeout(() => {
      setStatus('success');
      // В будущем здесь будет реальная отправка данных (email/url) на сервер
    }, 4500);
  };

  const getProgressWidth = () => {
    if (loadingText.includes('Анализируем')) return '33%';
    if (loadingText.includes('Извлекаем')) return '66%';
    if (loadingText.includes('Подготавливаем')) return '90%';
    return '100%';
  };

  const faqs = [
    {
      q: "А лица людей и пальцы не будут кривыми?",
      a: "Нет. Мы используем связку передовых моделей (Sora 2, Veo 3.1) и обязательный ручной контроль качества (Human QA). Если нейросеть выдает артефакт, мы перегенерируем сцену до идеала. Вы получаете только коммерческое качество."
    },
    {
      q: "Что с авторскими правами на видео и моделей?",
      a: "Весь сгенерированный контент лицензионно чист для коммерческого использования на маркетплейсах. Сгенерированные модели не существуют в реальности, поэтому никто не сможет предъявить права на их внешность."
    },
    {
      q: "А если мне не понравится результат?",
      a: "В каждый трипвайер и пилотный проект включена 1 бесплатная итерация правок. Мы докручиваем промпт и генерацию до тех пор, пока визуал не будет решать вашу бизнес-задачу."
    },
    {
      q: "В каком формате и разрешении я получу ролик?",
      a: "Вы получаете готовый MP4 файл в высоком разрешении (1080p или 4K по запросу), оптимизированный под требования Wildberries и Ozon (вертикальный или квадратный формат)."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">FrameOne</span>
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#how-it-works" className="hover:text-blue-600">Как это работает</a>
            <a href="#cases" className="hover:text-blue-600">Кейсы</a>
            <a href="#pricing" className="hover:text-blue-600">Тарифы</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
          </nav>
          <a
            href="#lead-magnet"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Бесплатный тест
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex max-w-2xl flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                <Zap size={16} />
                <span>Для селлеров Wildberries и Ozon</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Генерация продающих видео с помощью AI.
                <span className="block text-blue-600">В 5 раз дешевле.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Замените дорогие студии, моделей и долгий продакшен на нашу AI-фабрику. 
                Сокращаем издержки на 80% и поднимаем CTR карточки товара на 20% за 48 часов.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row min-h-[60px]" id="lead-magnet">
                {status === 'idle' && (
                  <form onSubmit={handleLeadSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      placeholder="Ссылка на ваш товар (WB/Ozon)"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 sm:w-auto"
                    >
                      AI-рендер бесплатно
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}

                {status === 'loading' && (
                  <div className="flex w-full max-w-md flex-col justify-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                      <p className="text-sm font-medium text-blue-800 animate-pulse">{loadingText}</p>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-200">
                      <div 
                        className="h-full bg-blue-600 transition-all duration-1000 ease-out"
                        style={{ width: getProgressWidth() }}
                      ></div>
                    </div>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600" />
                    <div className="text-sm">
                      <p className="font-bold">Товар успешно проанализирован!</p>
                      <p className="mt-0.5 opacity-90">Наш менеджер свяжется с вами в течение 5 минут для передачи результата.</p>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-3 text-sm text-slate-500">
                *Пришлем дизайнерский кадр вашего товара в стиле топовых брендов. Отвечаем за 5 минут.
              </p>
            </div>

            {/* Video Placeholder / Visual */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 shadow-2xl ring-1 ring-slate-900/5 sm:aspect-[16/9] lg:aspect-[4/5]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                      poster="https://images.pexels.com/photos/7564243/pexels-photo-7564243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    >
                      <source
                        src="/hero-video.mp4"
                        type="video/mp4"
                      />
                      Ваш браузер не поддерживает тег video.
                    </video>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Средний рост CTR</p>
                    <p className="text-2xl font-bold text-slate-900">+20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN BLOCK */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Кладбище вашей маржи</h2>
            <p className="mt-4 text-lg text-slate-400">
              Традиционный продакшен убивает unit-экономику товара еще до старта продаж.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-8">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-red-400">
                <Clock size={24} /> Традиционная студия
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✕</span> Поиск моделей, студии, реквизита (от 3 дней)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✕</span> Стоимость от 50 000 ₽ за один ролик
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✕</span> Съемка и монтаж занимают 1-2 недели
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✕</span> Если гипотеза не зашла — деньги сгорели
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-blue-600/10 p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-blue-400">
                <Sparkles size={24} /> FrameOne AI-Factory
              </h3>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">✓</span> Генерация любого окружения и моделей промптом
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">✓</span> Стоимость от 1 990 ₽ за креатив
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">✓</span> Готовый результат за 48 часов
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">✓</span> Дешевое тестирование десятков гипотез для WB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Как работает AI-конвейер</h2>
            <p className="mt-4 text-lg text-slate-600">Никакой магии. Только передовые нейросети и контроль качества.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { step: '01', title: 'Бриф', desc: 'Вы присылаете фото товара на телефон и пожелания.', icon: ImageIcon },
              { step: '02', title: 'Сценарий', desc: 'Наши LLM-модели пишут конверсионный сценарий.', icon: BarChart3 },
              { step: '03', title: 'Генерация', desc: 'Sora 2 и Veo 3.1 создают фотореалистичный видеоряд.', icon: Video },
              { step: '04', title: 'QA & Релиз', desc: 'Человек проверяет артефакты. Вы получаете готовый MP4.', icon: ShieldCheck },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <item.icon size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
                {i !== 3 && (
                  <div className="absolute top-8 left-[60%] hidden w-full border-t-2 border-dashed border-slate-200 md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / CASES */}
      <section id="cases" className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Результаты говорят сами за себя</h2>
            <p className="mt-4 text-lg text-slate-600">Посмотрите, как AI-видео меняет конверсию реальных товаров.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Case 1 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <span className="font-semibold text-slate-900">Кейс: Женская сумка</span>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">CTR +22%</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden relative">
                    <img src="/case-bag-before.jpg" alt="До" className="object-cover w-full h-full opacity-80" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">ДО (Обычное фото)</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden relative ring-2 ring-blue-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    >
                      <source src="/case-bag-after.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow-lg">ПОСЛЕ (AI-Видео)</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-600">
                <strong className="text-slate-900">Задача:</strong> Выделиться в конкурентной нише. <br/>
                <strong className="text-slate-900">Решение:</strong> Сгенерировали премиальное окружение (Париж, закат) без выезда на локацию.
              </p>
            </div>

            {/* Case 2 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <span className="font-semibold text-slate-900">Кейс: Косметика (Сыворотка)</span>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">Конверсия +18%</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden relative">
                    <img src="/case-serum-before.jpg" alt="До" className="object-cover w-full h-full opacity-80" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">ДО (Обычное фото)</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden relative ring-2 ring-blue-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    >
                      <source src="/case-serum-after.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow-lg">ПОСЛЕ (AI-Видео)</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-600">
                <strong className="text-slate-900">Задача:</strong> Показать текстуру и свежесть продукта. <br/>
                <strong className="text-slate-900">Решение:</strong> AI-генерация макро-съемки с каплями воды и динамичным светом. Экономия 80 000 ₽ на макро-студии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / TRIPWIRES */}
      <section id="pricing" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Начните с малого. Убедитесь сами.</h2>
            <p className="mt-4 text-lg text-slate-600">Цены, которые не нужно согласовывать с бухгалтерией.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {/* Tripwire 1 */}
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-slate-900">Сценарий + Раскадровка</h3>
              <p className="mt-2 text-sm text-slate-500">Интеллектуальная база для вашего видео.</p>
              <div className="my-6 text-4xl font-bold text-slate-900">490 ₽</div>
              <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Продающий сценарий от AI</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Визуальный storyboard</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Готовность 24 часа</li>
              </ul>
              <button className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">
                Заказать сценарий
              </button>
            </div>

            {/* Tripwire 2 */}
            <div className="relative flex flex-col rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Хит продаж
              </div>
              <h3 className="text-xl font-semibold text-slate-900">3 AI-обложки для WB</h3>
              <p className="mt-2 text-sm text-slate-500">Вход в воронку. Поднимите кликабельность карточки.</p>
              <div className="my-6 text-4xl font-bold text-slate-900">990 ₽</div>
              <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> 3 варианта фона и света</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Инфографика включена</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Готовность 24 часа</li>
              </ul>
              <button className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                Заказать обложки
              </button>
            </div>

            {/* Tripwire 3 */}
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-slate-900">Тест-драйв: 1 AI-ролик</h3>
              <p className="mt-2 text-sm text-slate-500">Короткий креатив (5 сек) для оценки качества.</p>
              <div className="my-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">1 990 ₽</span>
                <span className="text-lg text-slate-400 line-through">10 000 ₽</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> 1 короткое видео (MP4)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Генерация окружения</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Готовность 48 часов</li>
              </ul>
              <button className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">
                Запустить тест-драйв
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600">Нужен полноценный продакшен? <a href="#" className="font-medium text-blue-600 underline underline-offset-4">Пилотный ролик «под ключ» за 10 000 ₽</a></p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <MessageCircleQuestion size={24} />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Частые вопросы</h2>
            <p className="mt-4 text-lg text-slate-600">Развеиваем мифы об AI-генерации.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-400 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 text-slate-600 transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-white">
              <Sparkles size={20} className="text-blue-500" />
              <span className="text-xl font-bold tracking-tight">FrameOne</span>
            </div>
            <div className="text-sm">
              © 2026 FrameOne. AI-Factory for E-commerce.
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs opacity-60">
            *Контент генерируется с использованием искусственного интеллекта. Соответствует требованиям маркировки рекламы и 152-ФЗ.
          </div>
        </div>
      </footer>
    </div>
  );
}
