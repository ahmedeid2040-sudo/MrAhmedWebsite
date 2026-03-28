import { SiteShell } from "@/components/site-shell";

const services = [
  {
    icon: "01",
    title: "مواقع ومتاجر إلكترونية فاخرة",
    text: "تصميم وتطوير مواقع وهوية رقمية تعكس مستوى البراند وتحوّل الزائر إلى عميل محتمل بجودة بصرية عالية وسرعة ممتازة.",
    points: [
      "واجهة Premium تليق بالبراند",
      "سرعة وتجربة استخدام قوية",
      "هيكل محتوى واضح ومحسن للظهور",
    ],
  },
  {
    icon: "02",
    title: "أنظمة ERP وحلول تشغيل مخصصة",
    text: "بناء أنظمة داخلية لإدارة العمليات والمحاسبة والمتابعة والمهام بما يناسب طبيعة شغلك بدلًا من تكييف عملك على أدوات عامة.",
    points: [
      "إدارة العملاء والمشاريع",
      "صلاحيات ولوحات تحكم مخصصة",
      "تقارير تشغيلية قابلة للتوسع",
    ],
  },
  {
    icon: "03",
    title: "أتمتة وربط بين الأنظمة",
    text: "تقليل العمل اليدوي وتكرار المهام عبر أتمتة التدفقات بين الموقع والنماذج وواتساب والبريد ولوحات الإدارة وأدوات الفريق.",
    points: [
      "تقليل الأخطاء البشرية",
      "سرعة متابعة أعلى",
      "تشغيل أذكى ونمو أكثر استقرارًا",
    ],
  },
  {
    icon: "04",
    title: "استراتيجية رقمية ونمو بيعي",
    text: "ليست المسألة مجرد كود؛ بل بناء رحلة رقمية تشرح القيمة وتبني الثقة وتدفع العميل لاتخاذ قرار الشراء أو الحجز.",
    points: [
      "تموضع واضح للخدمة",
      "تحسين مسار التحويل",
      "رسائل بيع أقوى ومقنعة",
    ],
  },
];

const metrics = [
  { value: "+20", label: "مشروعًا ومبادرة رقمية تم العمل عليها وتطويرها" },
  { value: "3x", label: "إمكانية رفع كفاءة التشغيل عبر الأتمتة والتبسيط" },
  { value: "95%", label: "تركيز على الوضوح والتنظيم قبل زيادة التعقيد" },
  { value: "24/7", label: "هدف التنفيذ: أن يعمل النظام حتى وأنت بعيد عنه" },
];

const process = [
  {
    number: "01",
    title: "فهم البيزنس والهدف الحقيقي",
    text: "أبدأ من فهم ما الذي تريد بيعه، وكيف يشتري العميل، وأين توجد الفجوة بين الوضع الحالي والنتيجة المطلوبة.",
  },
  {
    number: "02",
    title: "تصميم تجربة تعكس قيمة البراند",
    text: "أبني واجهة تشرح الخدمة بسرعة، وتمنح انطباعًا احترافيًا، وتوجه الزائر بوضوح نحو الخطوة التالية.",
  },
  {
    number: "03",
    title: "تطوير نظيف قابل للتوسع",
    text: "تنفيذ تقني منظم يراعي السرعة، سهولة التطوير لاحقًا، وإمكانية إضافة Dashboard أو CRM أو أي نظام داخلي.",
  },
  {
    number: "04",
    title: "تحويل الموقع من شكل إلى أداة بيع",
    text: "الهدف النهائي ليس مجرد صفحة جميلة، بل أصل رقمي يساعدك على جلب العملاء، المتابعة، والنمو بثبات.",
  },
];

const cases = [
  {
    title: "موقع خدمات تقني موجه لسوق الخليج",
    tag: "Brand Positioning",
    description:
      "إعادة صياغة العرض الرقمي ليخاطب العميل المستهدف بثقة، مع واجهة فاخرة تدعم التمركز كخدمة عالية القيمة.",
  },
  {
    title: "هيكلة نظام تشغيل داخلي لمشاريع متعددة",
    tag: "Custom ERP Thinking",
    description:
      "تحويل الفوضى التشغيلية إلى مسار عمل واضح: عميل → مشروع → مهام → تحصيل → متابعة، داخل بنية قابلة للتوسع لاحقًا.",
  },
  {
    title: "ربط التسويق بالتنفيذ والأتمتة",
    tag: "Automation Strategy",
    description:
      "تقليل العمل اليدوي في الاستقبال والمتابعة والتنظيم عبر تصور عملي يربط بين الموقع والـ leads وسير العمل الداخلي.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="grid-overlay relative overflow-hidden pt-10">
        <div className="container-shell grid min-h-[calc(100vh-84px)] items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="relative z-10">
            <div className="kicker">مستشار تقني ومطور حلول رقمية للشركات ورواد الأعمال</div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
              أبني لك{" "}
              <span className="text-gradient">واجهة رقمية فاخرة</span>
              <br />
              ونظام عمل أذكى
              <br />
              يخدم النمو الحقيقي.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl">
              أنا أحمد عيد. أساعد الشركات ورواد الأعمال على بناء مواقع احترافية،
              متاجر قوية، وأنظمة مخصصة تجعل التشغيل أكثر وضوحًا، والبيع أكثر
              احترافًا، والنتائج أكثر قابلية للتوسع.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                ابدأ مشروعك الآن
              </a>
              <a href="#work" className="btn-secondary">
                شاهد طريقة التفكير والتنفيذ
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="glass-soft rounded-2xl p-4">
                <div className="text-sm font-bold text-white">تصميم يبيع</div>
                <div className="mt-2 text-sm leading-7 text-slate-400">
                  واجهة تعكس مستوى البراند وتدفع الزائر للثقة واتخاذ قرار.
                </div>
              </div>
              <div className="glass-soft rounded-2xl p-4">
                <div className="text-sm font-bold text-white">تطوير قابل للتوسع</div>
                <div className="mt-2 text-sm leading-7 text-slate-400">
                  هيكل تقني منظم يسمح بإضافة لوحات تحكم وأنظمة لاحقًا بسهولة.
                </div>
              </div>
              <div className="glass-soft rounded-2xl p-4">
                <div className="text-sm font-bold text-white">تفكير تشغيلي</div>
                <div className="mt-2 text-sm leading-7 text-slate-400">
                  التركيز ليس على الشكل فقط، بل على كيف يدعم الموقع سير البيزنس.
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="glass relative overflow-hidden rounded-[32px] p-5 md:p-7">
              <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="rounded-[28px] border border-white/10 bg-[#081220]/70 p-5">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <div className="text-sm text-slate-400">واجهة + تشغيل + نمو</div>
                    <div className="mt-1 text-xl font-extrabold text-white">
                      Digital Business System
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200">
                    Premium Build
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-300">
                        Brand Presence
                      </span>
                      <span className="text-sm font-bold text-white">واجهة احترافية</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/8">
                      <div className="h-2 w-[92%] rounded-full bg-gradient-to-l from-cyan-300 via-blue-400 to-indigo-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-300">
                        Operations Logic
                      </span>
                      <span className="text-sm font-bold text-white">هيكلة ذكية</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/8">
                      <div className="h-2 w-[84%] rounded-full bg-gradient-to-l from-violet-300 via-indigo-400 to-blue-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-300">
                        Automation Readiness
                      </span>
                      <span className="text-sm font-bold text-white">جاهزية للتوسع</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/8">
                      <div className="h-2 w-[88%] rounded-full bg-gradient-to-l from-emerald-300 via-cyan-400 to-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-[#0d1728] p-4">
                    <div className="text-sm text-slate-400">المخرجات</div>
                    <div className="mt-2 text-lg font-extrabold text-white">
                      موقع + نظام تفكير تشغيلي
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-[#0d1728] p-4">
                    <div className="text-sm text-slate-400">الهدف</div>
                    <div className="mt-2 text-lg font-extrabold text-white">
                      ثقة أعلى + تحويل أفضل
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.value} className="metric-card">
              <div className="metric-number text-white">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <div className="kicker">الخدمات الأساسية</div>
            <h2 className="section-title mt-6 text-white">
              ما أبنيه ليس مجرد صفحات جميلة،
              <br />
              بل أصول رقمية تخدم المبيعات والتشغيل.
            </h2>
            <p className="section-subtitle mt-6">
              أعمل على الدمج بين الجاذبية البصرية، الوضوح التسويقي، والبنية
              التقنية النظيفة حتى يصبح الموقع أو النظام جزءًا فعليًا من نمو
              البيزنس، وليس مجرد واجهة شكلية.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title text-white">{service.title}</h3>
                <p className="service-text">{service.text}</p>
                <ul className="service-list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-me" className="py-24">
        <div className="container-shell">
          <div className="glass rounded-[34px] p-6 md:p-10">
            <div className="max-w-3xl">
              <div className="kicker">لماذا هذا الأسلوب مختلف؟</div>
              <h2 className="section-title mt-6 text-white">
                لأنني أنظر للموقع كجزء من
                <span className="text-gradient"> نظام أعمال </span>
                وليس مجرد تصميم.
              </h2>
              <p className="section-subtitle mt-6">
                كثير من المواقع تبدو جيدة بصريًا لكنها لا تشرح القيمة، ولا تبني
                الثقة، ولا تدعم التشغيل. طريقتي تبدأ من فهم البيزنس نفسه، ثم
                تحويله إلى تجربة رقمية أنيقة وواضحة وقابلة للتوسع.
              </p>
            </div>

            <div className="feature-strip mt-10">
              <div className="feature-item">
                <strong className="text-white">تموضع أوضح</strong>
                <span>رسائل أقوى تجعل العميل يفهم سريعًا من أنت ولماذا يختارك.</span>
              </div>
              <div className="feature-item">
                <strong className="text-white">واجهة أرقى</strong>
                <span>تصميم يمنح الانطباع الذي يليق بخدمة عالية القيمة.</span>
              </div>
              <div className="feature-item">
                <strong className="text-white">هيكل تقني أنظف</strong>
                <span>بنية أسهل في التطوير لاحقًا، سواء لموقع أكبر أو Dashboard.</span>
              </div>
              <div className="feature-item">
                <strong className="text-white">تشغيل أذكى</strong>
                <span>تفكير يساعدك لاحقًا على إدارة العملاء والمشاريع والعمليات بوضوح.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <div className="kicker">طريقة العمل</div>
            <h2 className="section-title mt-6 text-white">
              من الفكرة وحتى التنفيذ،
              <br />
              كل خطوة تخدم هدفًا واضحًا.
            </h2>
            <p className="section-subtitle mt-6">
              لا أحب البناء العشوائي. أفضل دائمًا أن تكون كل مرحلة مرتبطة بنتيجة:
              وضوح في الرسالة، قوة في الحضور، سهولة في الاستخدام، وقابلية حقيقية
              للتوسع لاحقًا.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step) => (
              <div key={step.number} className="process-step">
                <div className="process-step-number">{step.number}</div>
                <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-8 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <div className="kicker">طريقة التفكير في المشاريع</div>
            <h2 className="section-title mt-6 text-white">
              أمثلة على نوع القيمة
              <br />
              التي أبنيها داخل كل مشروع.
            </h2>
            <p className="section-subtitle mt-6">
              سواء كان المطلوب موقعًا احترافيًا أو نظامًا مخصصًا أو تصورًا
              تشغيليًا أكثر ذكاءً، فالمنهج ثابت: بناء أصل رقمي يخدم هدفًا تجاريًا
              واضحًا.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="case-card">
                <div className="case-visual" />
                <div className="case-body">
                  <span className="tag">{item.tag}</span>
                  <h3 className="mt-5 text-2xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container-shell">
          <div className="final-cta">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <div className="kicker">لنحوّل فكرتك إلى أصل رقمي حقيقي</div>
                <h2 className="section-title mt-6 text-white">
                  لو كنت تريد موقعًا
                  <span className="text-gradient"> يليق بعملك </span>
                  ويخدم البيع فعلًا،
                  <br />
                  فلنبدأ من هنا.
                </h2>
                <p className="section-subtitle mt-6 max-w-2xl">
                  أعمل مع الشركات ورواد الأعمال الذين يريدون أكثر من مجرد شكل
                  جميل: يريدون تموضعًا أقوى، تجربة أفضل، وهيكلًا رقميًا يدعم
                  النمو والتشغيل بثقة.
                </p>
              </div>

              <div className="glass-soft rounded-[28px] p-5 md:p-6">
                <div className="rounded-[24px] border border-white/8 bg-[#0b1423]/85 p-6">
                  <div className="text-sm text-slate-400">الخطوة التالية</div>
                  <div className="mt-2 text-2xl font-black text-white">
                    احجز نقاشًا مبدئيًا
                  </div>

                  <div className="mt-6 space-y-3 text-sm text-slate-300">
                    <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                      تحديد الهدف التجاري للموقع أو النظام
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                      اختيار المسار الأنسب: موقع / متجر / نظام / أتمتة
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                      وضع تصور واضح للخطوة التالية والتنفيذ
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a href="mailto:ahmed.eid.2040@gmail.com" className="btn-primary">
                      راسلني الآن
                    </a>
                    <a href="/login" className="btn-secondary">
                      الدخول إلى اللوحة
                    </a>
                  </div>

                  <p className="mt-4 text-xs leading-7 text-slate-500">
                    يمكنك لاحقًا استبدال هذا الزر بزر واتساب مباشر أو نموذج حجز
                    فعلي حسب أسلوب البيع الذي تفضله.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
