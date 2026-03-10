import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SYMBOLS = [
  // ── Common Scenarios ──────────────────────────────────────────────
  {
    category: 'Common Scenarios',
    name: 'Flying',
    icon: 'flight',
    summary: 'Transcendence, freedom, ambition, and the desire to rise above limitations.',
    jung: 'Transcendence of everyday constraints; access to higher consciousness; empowerment through elevated perspective.',
    freud: 'Wish fulfillment and ambition; desire to escape restrictions; connected to childhood sensations of being lifted or swung.',
    taemong: 'Highly auspicious — signals a child of great talent, ambition, and a destiny to rise above their origins.',
    zhouGong: 'Flying high = success and promotion ahead; flying low = modest but positive progress; unable to fly = obstacles to address.',
  },
  {
    category: 'Common Scenarios',
    name: 'Falling',
    icon: 'arrow_downward',
    summary: 'Loss of control, fear of failure, or the descent into deeper unconscious awareness.',
    jung: 'Loss of conscious control; descent into the unconscious (not always negative — can signal necessary inner exploration); fear of failure.',
    freud: 'Anxiety about social standing; moral anxiety; fear of sexual temptation or loss of control over drives.',
    taemong: 'Falling from height may indicate difficulty ahead; landing safely softens the omen considerably.',
    zhouGong: 'Warning of potential setbacks; a signal to pay close attention to current plans before proceeding.',
  },
  {
    category: 'Common Scenarios',
    name: 'Being Chased',
    icon: 'directions_run',
    summary: 'Avoidance of something unacknowledged — an inner conflict, fear, or unresolved situation.',
    jung: 'The Shadow — you are running from an aspect of yourself you have not yet integrated or acknowledged.',
    freud: 'Anxiety and guilt; a repressed desire or fear is pursuing you through the disguise of a pursuer.',
    taemong: 'A challenge or obstacle in the path; the identity and nature of the pursuer carries additional meaning.',
    zhouGong: 'Being chased and escaping = overcoming enemies or competitors; being caught = beware of conflict in waking life.',
  },
  {
    category: 'Common Scenarios',
    name: 'Teeth Falling Out',
    icon: 'sentiment_dissatisfied',
    summary: 'Anxiety about appearance, self-expression, competence, or significant personal change.',
    jung: 'Fear of transformation and change; leaving the old self behind; anxiety about communication and being heard.',
    freud: 'Anxiety about appearance and social attractiveness; fear of loss of power or personal vitality.',
    taemong: 'Pay attention to family members\' wellbeing; upper tooth = senior relative, lower tooth = younger relative.',
    zhouGong: 'Attend to health and physical wellbeing; financial caution advised; new tooth growing in = renewal ahead.',
  },
  {
    category: 'Common Scenarios',
    name: 'Being Naked in Public',
    icon: 'person',
    summary: 'Vulnerability, fear of exposure, or a desire for authenticity and transparency.',
    jung: 'Fear of being truly seen; vulnerability; the longing for authentic self-expression stripped of social masks.',
    freud: 'Exhibitionist wish; anxiety about the exposure of one\'s true self, flaws, or secret desires.',
    taemong: 'Openness and transparency; a sign of an honest, forthright spirit in the child.',
    zhouGong: 'A test of courage and authenticity; if others do not notice, it signals growing confidence in your true self.',
  },
  {
    category: 'Common Scenarios',
    name: 'Taking an Exam',
    icon: 'quiz',
    summary: 'Performance anxiety, fear of being evaluated, or a sense of being underprepared.',
    jung: 'Ongoing evaluation by life itself; anxiety about adequacy and growth; a rite of passage not yet completed.',
    freud: 'Anxiety about performance and authority; unresolved tensions around being judged by parental or societal standards.',
    taemong: 'A school or exam dream suggests a child destined for academic excellence and intellectual achievement.',
    zhouGong: 'Passing the exam = success and recognition ahead; failing = a warning to prepare more carefully before acting.',
  },
  // ── Natural Elements ───────────────────────────────────────────────
  {
    category: 'Natural Elements',
    name: 'Water / Ocean',
    icon: 'water',
    summary: 'The unconscious mind, emotional states, depth, and the flow of inner life.',
    jung: 'The unconscious itself; the deeper layers of the psyche; the collective unconscious shared by all humanity.',
    freud: 'The womb, birth, fertility; emotional life; the id and its primal drives.',
    taemong: 'Clear, flowing water = abundant fortune; large ocean = vast potential; murky water = conditions need clearing.',
    zhouGong: 'Clear water = good fortune and clarity of purpose; turbulent water = conflict or difficulty ahead.',
  },
  {
    category: 'Natural Elements',
    name: 'Fire',
    icon: 'local_fire_department',
    summary: 'Transformation, passion, purification, and the creative life force.',
    jung: 'Transformation and purification; the divine spark of consciousness; passion and the process of becoming.',
    freud: 'Ambition and sexual drive; the destructive impulse; urethral eroticism in classical theory.',
    taemong: 'A blazing fire = passionate, energetic spirit; a bright, controlled flame = great destiny and vitality.',
    zhouGong: 'Fire at home = family fortune rising; uncontrolled fire = caution needed in current affairs.',
  },
  {
    category: 'Natural Elements',
    name: 'Rain',
    icon: 'water_drop',
    summary: 'Emotional release, cleansing, renewal, and the washing away of what is no longer needed.',
    jung: 'Emotional release and cleansing; the unconscious washing over and refreshing the ego; renewal and grief.',
    freud: 'Release of tension; sexuality and fertility; the letting go of suppressed emotion.',
    taemong: 'Gentle rain = blessing and abundance; heavy, powerful rain = a child of remarkable force and feeling.',
    zhouGong: 'Rain after drought = great blessing; heavy rain = powerful emotional clarity; getting soaked = emotional breakthrough.',
  },
  {
    category: 'Natural Elements',
    name: 'Sun',
    icon: 'wb_sunny',
    summary: 'Consciousness, vitality, authority, and the highest aspirations of the self.',
    jung: 'The conscious ego; the father archetype; vitality and consciousness itself in its most active form.',
    freud: 'The father and authority figures; paternal energy; the ego ideal and what we strive to become.',
    taemong: 'The most auspicious Taemong symbol — holding, catching, or swallowing the sun signals a child of extraordinary destiny.',
    zhouGong: 'Sunshine = happiness and success; sunrise = new beginnings and fresh opportunities; solar eclipse = caution advised.',
  },
  {
    category: 'Natural Elements',
    name: 'Moon',
    icon: 'nights_stay',
    summary: 'The unconscious, intuition, feminine energy, cycles, and inner wisdom.',
    jung: 'The unconscious and its rhythms; the feminine principle; the anima archetype; cycles of change and renewal.',
    freud: 'The mother archetype; the female principle; cyclical processes and the rhythm of bodily life.',
    taemong: 'The moon signals a sensitive, artistic, intuitive nature; a child of refinement and inner wisdom.',
    zhouGong: 'Full moon = fulfillment and achievement; crescent moon = growth and expansion ahead; dark moon = introspection needed.',
  },
  {
    category: 'Natural Elements',
    name: 'Star',
    icon: 'star',
    summary: 'Spiritual aspiration, hope, individual destiny, and guidance from beyond the everyday.',
    jung: 'The Self in its highest expression; spiritual guide; the soul; hope and the light of individual potential.',
    freud: 'Ambition and the ego ideal; the longing to be recognized and to shine.',
    taemong: 'A shining star falling into one\'s chest or held in the hands = a child destined for greatness and wide recognition.',
    zhouGong: 'Bright stars = good fortune and clarity; falling stars = significant change approaching; full sky of stars = abundant future.',
  },
  // ── Animals ──────────────────────────────────────────────────────
  {
    category: 'Animals',
    name: 'Snake',
    icon: 'pest_control',
    summary: 'Transformation, wisdom, healing, primal energy, and the depths of the unconscious.',
    jung: 'The Self; wisdom and transformation; primal, instinctual energy; the unconscious in its most ancient form.',
    freud: 'Phallic symbolism; sexuality and temptation; the id\'s raw desires.',
    taemong: 'Highly auspicious — especially large snakes or serpent-dragons; signals great fortune, vitality, and a powerful child.',
    zhouGong: 'Being bitten by a snake = unexpected good fortune; seeing a snake = wisdom and transformation ahead.',
  },
  {
    category: 'Animals',
    name: 'Dog',
    icon: 'pets',
    summary: 'Loyalty, instinct, friendship, protection, and the faithful companion archetype.',
    jung: 'The loyal inner companion; helpful instincts; sometimes the anima or shadow in tame, domesticated form.',
    freud: 'Base drives made social and domesticated; sexuality and instinct channeled through loyalty.',
    taemong: 'A dog signals a loyal, hardworking, faithful child; a protective family spirit.',
    zhouGong: 'A friendly dog = faithful allies around you; a barking dog = heed a warning; a dog bite = conflict with a close friend.',
  },
  {
    category: 'Animals',
    name: 'Fish',
    icon: 'set_meal',
    summary: 'Abundance, spiritual nourishment, fertility, and the gifts of the unconscious depths.',
    jung: 'Unconscious contents rising to awareness; spiritual nourishment; abundance and the gifts of inner life.',
    freud: 'Sexuality and fertility; the abundance of the id.',
    taemong: 'Among the most auspicious Taemong symbols — large, beautiful fish signal great wealth, abundance, and a talented child.',
    zhouGong: 'Catching fish = financial gain; seeing many fish swimming = prosperity and social success on the horizon.',
  },
  {
    category: 'Animals',
    name: 'Bird',
    icon: 'flutter_dash',
    summary: 'The soul, spiritual freedom, elevated perspective, and messages from the deeper self.',
    jung: 'The soul and the spirit; freedom and transcendence; higher aspirations; messages from the unconscious psyche.',
    freud: 'The wish to escape; sexual symbolism in some contexts; the longing for liberation.',
    taemong: 'Eagles and large birds of prey = powerful, ambitious, high-achieving child; small birds = gentle, artistic nature.',
    zhouGong: 'A singing bird = good news arriving soon; a flock of birds = social harmony and success; a bird in hand = secure fortune.',
  },
  {
    category: 'Animals',
    name: 'Spider',
    icon: 'bug_report',
    summary: 'Creativity, fate, the weaving of destiny, and the complex feminine archetype.',
    jung: 'The creative feminine; the Great Mother archetype who both creates and destroys; fate and the weaving of destiny.',
    freud: 'The devouring mother; entrapment; sexual anxiety about the feminine.',
    taemong: 'Signals a child of remarkable craft, artistry, and strategic intelligence; a weaver of their own fate.',
    zhouGong: 'A spider descending from above = unexpected good news; a spider bite = a financial windfall from an unexpected source.',
  },
  {
    category: 'Animals',
    name: 'Bear',
    icon: 'cruelty_free',
    summary: 'Strength, power, primal instinct, maternal protection, and the depth of natural force.',
    jung: 'The powerful feminine; primal instinctual force; the devouring mother or the protective maternal archetype.',
    freud: 'Primal power and aggression; the father or mother as experienced in earliest childhood.',
    taemong: 'A bear is a strong Taemong symbol — signals a child of great strength, determination, and force of character.',
    zhouGong: 'A bear encounter = great power coming your way; a bear you befriend = powerful allies; a charging bear = face challenges directly.',
  },
  // ── Places & Spaces ───────────────────────────────────────────────
  {
    category: 'Places & Spaces',
    name: 'House / Home',
    icon: 'home',
    summary: 'The psyche itself — different rooms represent different aspects of consciousness.',
    jung: 'The self and the total psyche; different rooms reflect different aspects of consciousness (attic = intellect, basement = shadow/unconscious).',
    freud: 'The body; attic = intellect and superego, basement = id and unconscious drives; rooms = hidden aspects of the self.',
    taemong: 'Entering a house = entering a new life phase; receiving a house = great fortune and security ahead.',
    zhouGong: 'A large, bright house = prosperity and happiness; a decaying house = attend to health or relationships urgently.',
  },
  {
    category: 'Places & Spaces',
    name: 'Mountain',
    icon: 'landscape',
    summary: 'Spiritual aspiration, the challenge of growth, achievement, and the view from above.',
    jung: 'The Self in its highest form; spiritual aspiration; the challenge of individuation and personal growth.',
    freud: 'Sexual symbol of height and conquest; ambition and the drive toward achievement.',
    taemong: 'Climbing a mountain = rising fortune; reaching the summit = great achievement; standing at the peak = a child of destiny.',
    zhouGong: 'Steady climbing = gradual, certain progress; reaching the peak = great success; a clear view from the top = clarity ahead.',
  },
  {
    category: 'Places & Spaces',
    name: 'Forest / Woods',
    icon: 'forest',
    summary: 'The unconscious, the unknown, instinct, and the wild depths of the inner world.',
    jung: 'The unconscious and the realm of instinct; the unknown depths of the psyche; the place where transformation begins.',
    freud: 'Female sexuality; the mystery of the unconscious; the id in its most untamed form.',
    taemong: 'A lush, abundant forest = many descendants and a life of great richness and legacy.',
    zhouGong: 'Entering a forest = venturing courageously into the unknown; a bright, sunlit forest = clarity and favorable outcome ahead.',
  },
  {
    category: 'Places & Spaces',
    name: 'Bridge',
    icon: 'directions',
    summary: 'Transition, the crossing from one life phase to another, and connection between worlds.',
    jung: 'Life transition; the crossing between the known and unknown; connection between conscious and unconscious aspects of the self.',
    freud: 'Transition anxiety; the passage between life stages; sexual metaphor in some interpretations.',
    taemong: 'A bridge often signals a child who will be a great connector, mediator, or peacemaker between people.',
    zhouGong: 'Crossing a bridge successfully = overcoming major obstacles; a broken bridge = caution with partnerships or agreements.',
  },
  // ── People & Relationships ─────────────────────────────────────────
  {
    category: 'People & Relationships',
    name: 'Baby / Child',
    icon: 'child_care',
    summary: 'New beginnings, creative potential, innocence, and the emerging self.',
    jung: 'New beginning and creative potential; the emerging Self; the divine child archetype; fresh possibility.',
    freud: 'Wish for or anxiety about parenthood; regression to innocence; the beginning of a new creative project.',
    taemong: 'Core Taemong symbol — a vivid baby dream strongly indicates a pregnancy coming or a child of great fortune and joy.',
    zhouGong: 'A baby = new opportunities and fresh starts; a crying baby = attention needed; a laughing baby = joy and good fortune ahead.',
  },
  {
    category: 'People & Relationships',
    name: 'Deceased Loved One',
    icon: 'favorite',
    summary: 'Unresolved grief, ancestral guidance, messages from the inner world, and memory.',
    jung: 'The anima or animus taking the form of a beloved figure; unresolved grief; the inner figure seeking dialogue.',
    freud: 'Unresolved feelings toward the deceased; wish for reunion; the working-through of grief and loss.',
    taemong: 'A deceased ancestor visiting in a dream is often highly auspicious — understood as ancestral blessing and guidance from the spirit world.',
    zhouGong: 'A deceased loved one appearing in a dream = ancestral care and protection; they may be bringing a message of comfort or guidance.',
  },
  // ── Objects ──────────────────────────────────────────────────────
  {
    category: 'Objects',
    name: 'Car / Vehicle',
    icon: 'directions_car',
    summary: 'The ego\'s journey through life; control and direction over one\'s path.',
    jung: 'The ego\'s movement through life; control or loss of control over one\'s chosen direction.',
    freud: 'The body; sexual power; control and dominance over one\'s life circumstances.',
    taemong: 'A smooth car journey = favorable life progress ahead; a grand vehicle = high status for the child.',
    zhouGong: 'Driving smoothly = success in current endeavors; car crash = beware of hasty decisions; losing control = re-examine direction.',
  },
  {
    category: 'Objects',
    name: 'Mirror',
    icon: 'check_box_outline_blank',
    summary: 'Self-reflection, truth, identity, and the confrontation with one\'s real self.',
    jung: 'The confrontation with the Self; an invitation to see beyond the persona and recognize the true self.',
    freud: 'Narcissism; the self-reflection of the ego; anxieties about self-image and how one appears to others.',
    taemong: 'A clear mirror = a transparent, honest child; a broken mirror = caution regarding relationships or partnerships.',
    zhouGong: 'A bright, clear mirror = clarity and truth in current situation; a broken mirror = separation or disruption ahead.',
  },
  {
    category: 'Objects',
    name: 'Gold / Treasure',
    icon: 'diamond',
    summary: 'The highest value — inner wisdom, material abundance, or the discovered Self.',
    jung: 'The Self in its most valued, realized form; inner wisdom and authentic achievement.',
    freud: 'Power, control, and retention; anal symbolism; the material expression of deep desire.',
    taemong: 'Gold and jewels are very auspicious — signals wealth, precious fortune, and a child of rare value.',
    zhouGong: 'Finding gold = excellent fortune incoming; losing gold = financial caution advised; receiving gold = a generous benefactor appears.',
  },
  {
    category: 'Objects',
    name: 'Door',
    icon: 'door_front',
    summary: 'Opportunity, transition, the threshold between what is known and what awaits.',
    jung: 'The threshold between the known and unknown; opportunity and transition between life phases.',
    freud: 'Sexual symbolism; the entrance to a new domain; decision-making at a critical threshold.',
    taemong: 'An open door = welcome opportunity; a golden door = extraordinary fortune; a locked door = patience needed.',
    zhouGong: 'An open door = new opportunity ahead; a closed door = temporary obstacle; walking through = committing to change.',
  },
  {
    category: 'Objects',
    name: 'Blood',
    icon: 'favorite_border',
    summary: 'Life force, vitality, family bonds, sacrifice, and the price of transformation.',
    jung: 'Life force and vital energy; family lineage and ancestral connection; sacrifice and necessary transformation.',
    freud: 'Sexuality and its costs; castration anxiety; violence and aggressive impulses.',
    taemong: 'Blood can indicate powerful life energy, vitality, and the intensity of family bonds in the child.',
    zhouGong: 'Bleeding = loss in some domain; seeing blood = relationship conflicts need attention; blood on others = care for close relationships.',
  },
  {
    category: 'Objects',
    name: 'Death (in dream)',
    icon: 'change_circle',
    summary: 'Major transformation, the end of one phase, and the necessary beginning of another.',
    jung: 'Profound transformation and rebirth — almost never literal; the end of a phase of life; necessary surrender.',
    freud: 'Wish or unconscious feeling regarding the person who dies; the death drive; unresolved emotional relationship.',
    taemong: 'A deceased ancestor appearing = ancestral blessing; dreaming of death = often signals a significant life transition, not a literal event.',
    zhouGong: 'Dreaming of someone\'s death = longevity for them; dreaming of your own death = upcoming good fortune and new beginning.',
  },
];

const CATEGORIES = [...new Set(SYMBOLS.map((s) => s.category))];

function SymbolCard({ symbol }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-xl">{symbol.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold">{symbol.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed truncate">{symbol.summary}</p>
        </div>
        <span className={`material-symbols-outlined text-gray-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-white/10 pt-4 grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">Jungian</p>
            <p className="text-gray-300 text-sm leading-relaxed">{symbol.jung}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-accent-purple uppercase tracking-wider">Freudian</p>
            <p className="text-gray-300 text-sm leading-relaxed">{symbol.freud}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Korean Taemong</p>
            <p className="text-gray-300 text-sm leading-relaxed">{symbol.taemong}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">Zhou Gong</p>
            <p className="text-gray-300 text-sm leading-relaxed">{symbol.zhouGong}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DreamDictionaryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const displayed = activeCategory === 'All'
    ? SYMBOLS
    : SYMBOLS.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-6 uppercase">
            <span className="material-symbols-outlined text-sm">menu_book</span>
            Dream Dictionary
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 text-white leading-tight">
            What Does Your Dream Symbol Mean?
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed px-2">
            Explore the meanings of common dream symbols through four interpretive traditions:
            Jungian psychology, Freudian analysis, Korean Taemong, and Chinese Zhou Gong.
            Click any symbol to expand its full interpretation.
          </p>
        </section>

        {/* Category Filter */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-background-dark'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Symbols Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          {activeCategory === 'All' ? (
            CATEGORIES.map((cat) => (
              <div key={cat} className="mb-10">
                <h2 className="text-lg font-bold text-gray-400 uppercase tracking-widest text-xs mb-4 border-b border-white/10 pb-3">
                  {cat}
                </h2>
                <div className="space-y-3">
                  {SYMBOLS.filter((s) => s.category === cat).map((sym) => (
                    <SymbolCard key={sym.name} symbol={sym} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-3">
              {displayed.map((sym) => (
                <SymbolCard key={sym.name} symbol={sym} />
              ))}
            </div>
          )}
        </section>

        {/* About the traditions */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-14">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">About These Interpretation Traditions</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">Jungian Analysis</strong> — developed by Swiss psychiatrist
                Carl Jung (1875–1961), interprets dreams as communications from the unconscious mind,
                focusing on universal archetypes, symbols, and the process of individuation — the lifelong
                journey toward wholeness.
              </p>
              <p>
                <strong className="text-white">Freudian Analysis</strong> — developed by Sigmund Freud
                (1856–1939), views dreams as disguised fulfillments of repressed wishes, paying close
                attention to emotional tone, symbolic substitution, and the relationship between conscious
                and unconscious desires.
              </p>
              <p>
                <strong className="text-white">Korean Taemong (태몽)</strong> — a centuries-old Korean
                tradition of interpreting vivid dreams that are believed to foretell the birth and future
                character of a child. Taemong dreams are considered messages about destiny, fortune, and
                family lineage.
              </p>
              <p>
                <strong className="text-white">Chinese Zhou Gong (周公解梦)</strong> — one of the world's
                oldest dream dictionaries, attributed to the Duke of Zhou from ancient China (circa 1100 BCE).
                It catalogues thousands of dream scenarios and their auspicious or cautionary meanings,
                drawing on over 3,000 years of cultural wisdom.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Your Dream Analyzed by AI</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Describe your dream and receive a personalized, multi-framework interpretation in seconds.
            Free, instant, no account required.
          </p>
          <Link
            to="/#dream-input"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#34e3fb] text-background-dark font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(30,216,241,0.3)] transition-all"
          >
            Analyze My Dream
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}
