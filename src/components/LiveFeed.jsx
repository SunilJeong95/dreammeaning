import { useLang } from '../contexts/LanguageContext';

const dreams = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-KdG-REYdS6TZ151i_6nyzeNA2Tr6JHHYyvtu90LqCckR4lYAkewEsDglfEb1W8LdXlTwZ1K4m0_Gh-x7MMqbqczfYhMDt-X1l8ApkF9QrcP_G7HSLaXz8m0Uq_-PlDK1wXiNcyWdzGRIdGhpp1rGRUEAPrhHlcvMZo_SGAH9jcl1nRSfRbg6Rsb8QvF2skfcnkLqqt_yZoUNp9FUioliWsIkDnFEvy3SYbiMFWD00DVl4bzTiV3GXgs1B-ZPUvz5-Ad63pUPsZY",
    aspect: "aspect-[4/3]",
    title: "Floating Archipelago",
    tag: "Lucid Dream",
    tagColor: "text-primary",
    excerpt: '"I discovered islands floating in a void of stars, connected by bridges of pure light..."',
    flag: "🇯🇵",
    location: "Tokyo",
    views: "1.2k",
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyv703YMF-CQJSA3ktezQTJ5l9_lWkoHKF5xNORJUSd9f_lViUknpKnPaJJHj1LgZcOWGnD3WPPWpQmMx48V2oUgyGLlqA4ZekShHWQyVw0I--OYQsxC3lOWJI5dtX2Kfi-7HBmAIyk3blN--AuUc2nK6KazMRXBedm5rTutH1YyQC_MiLB-9S28gqxMlCyMQ88akCrVzh-T1S9fTqutN1OBd68crF_A3Hkak51oslOnlIARwNU_KgriUxwRcrxtNl23kCgrMEWSc",
    aspect: "aspect-[3/4]",
    title: "Neon Rain",
    tag: "Nightmare",
    tagColor: "text-accent-purple",
    excerpt: '"Running through a city that was melting into digital rain. The code was speaking to me."',
    flag: "🇺🇸",
    location: "NYC",
    views: "854",
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_4TSUR-9_eQ6I3V3_wxKu4g0NNrIMuwMjQZttsir1emXmQ--UMsuOPEW1YXo4_rfGSFetnkoY-UnZGNuj6qn4Awzoqsc21QIhuBgayTx3EGvJVVai4XcJ4nH3VNWt7TVDRtEywyztTOqhEROhMwCfYW7fOl5Ej8WJgL0QLF2nflp6wd5tzieHuRgjwyhj5A9TNdLg_HuZsobWIXSQPr6A3GpMReXQ3bF1h9KLJQCc8KnXDAvuqZV8lIa7Rpkzak0xGM11oN259gU",
    aspect: "aspect-video",
    title: "The Deep Tea Party",
    tag: "Recurring",
    tagColor: "text-primary",
    excerpt: '"Having tea with bioluminescent jellyfish in a submerged Victorian parlor."',
    flag: "🇬🇧",
    location: "London",
    views: "2.4k",
  },
  {
    id: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5PQuAoS0WOmY-XP80ZCdxFhkQlMCW2TyBivuwwZgbfmanxHJQvDCb3hf6L3e-45bDG0OptLezUeQYIAlfE0b528vY61Sb6HKr2fFHImjBUjFoSx_QzdjaZHst3t-wFLo9ifDNfsLD0iQWEGQo3kZnKWtxYs3sGogb_B7zmhneMXo2WmMBbFX-5R8721AR9dDpW0jIG3CzO_NLUFQOLfubP5GDBf_ztRN1XUbJV1o3RZ6XVTfjSPrYBFdizNvqUSLcAXrSYvymxNo",
    aspect: "aspect-[3/4]",
    title: "Mirror Desert",
    tag: "Prophetic",
    tagColor: "text-accent-purple",
    excerpt: '"Walking through a desert where every grain of sand was a tiny mirror reflecting my past."',
    flag: "🇪🇬",
    location: "Cairo",
    views: "567",
  },
  {
    id: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQjMywhGyb22SIjhcjq2zXbnICyNYVgI9-wC-gt1ttzNTWkQcMzl0sa14lPMLP3DHk2w8ehFgdGz4si-yAHxxn_0Q1H32JfaYGoISu1A9T3NQLyn-NokB-89b6Xx9zv0OXvgTf-T9g2YUZ3onlJxRwnWYfz3tsh2GHwnTHw4jBmiXRK80A3EAJFlOv7U_UyA6EQGXemWs2i_LQWE3WFUMWHKGdZrK_xRdm3jqctQymX8X8Apt15HT4g72nR2_3_bNV1hmej3_Csw",
    aspect: "aspect-square",
    title: "The Color of Sound",
    tag: "Abstract",
    tagColor: "text-primary",
    excerpt: '"I could see music as physical ribbons of color wrapping around the trees."',
    flag: "🇧🇷",
    location: "Rio",
    views: "3.1k",
  },
];

function DreamCard({ dream }) {
  return (
    <div className="break-inside-avoid relative group rounded-2xl overflow-hidden glass-panel hover:border-primary/30 transition-all duration-300">
      <div className={`${dream.aspect} w-full overflow-hidden relative`}>
        <img
          src={dream.image}
          alt={dream.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-medium text-lg leading-tight mb-1">{dream.title}</p>
          <p className={`${dream.tagColor} text-xs uppercase tracking-widest mb-2 font-bold`}>{dream.tag}</p>
        </div>
      </div>
      <div className="p-5 pt-2">
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{dream.excerpt}</p>
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center text-xs">
              {dream.flag}
            </div>
            <span className="text-xs text-gray-500">{dream.location}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <span className="material-symbols-outlined text-[14px]">visibility</span>
            {dream.views}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LiveFeed() {
  const { t } = useLang();

  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            {t.galleryTitle}
            <span className="text-xs font-normal text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full tracking-wide">
              {t.gallerySample}
            </span>
          </h2>
          <p className="text-gray-400">{t.galleryDesc}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors border border-white/5">
            {t.trending}
          </button>
          <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors border border-white/5">
            {t.newest}
          </button>
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {dreams.map((dream) => (
          <DreamCard key={dream.id} dream={dream} />
        ))}
      </div>
    </section>
  );
}
