export interface ServiceData {
  slug: string;
  name: string;
  headline: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  whatItIs: string;
  whoItsFor: string[];
  whatToExpect: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "comprehensive-primary-care",
    name: "Comprehensive Primary Care",
    headline: "Comprehensive Primary Care in Iowa",
    metaDescription:
      "Whole-person primary care in Iowa at Perspective Health. We go beyond symptom management to address root causes and support your long-term health.",
    heroImage: "/images/service-primary-care.jpg",
    heroImageAlt: "Primary care provider consulting with patient in Iowa",
    intro:
      "Primary care is the foundation of your health journey. At Perspective Health, our primary care goes far beyond annual checkups and prescription refills — we partner with you to understand your full health picture and create a proactive plan for lasting wellbeing.",
    whatItIs:
      "Comprehensive primary care at Perspective Health integrates conventional medicine with an integrative, root-cause lens. We provide preventive care, chronic disease management, acute illness treatment, and health optimization. Rather than treating each symptom in isolation, we evaluate how all aspects of your health — physical, hormonal, metabolic, and lifestyle — connect and influence one another.",
    whoItsFor: [
      "Adults seeking a primary care provider who truly listens and takes time",
      "Patients managing chronic conditions like hypertension, diabetes, or thyroid disorders",
      "Individuals interested in preventive medicine and proactive health optimization",
      "Those who feel their conventional care isn't addressing the root causes of their symptoms",
      "Patients wanting an integrative approach to existing health concerns",
    ],
    whatToExpect: [
      "An extended initial visit (60–90 minutes) to review your complete health history",
      "Comprehensive lab work beyond standard panels to get a full picture",
      "A personalized care plan addressing your unique goals and health concerns",
      "Regular follow-up appointments to track your progress and adjust your plan",
      "Coordination with specialists and other providers as needed",
      "Direct communication with your provider between visits",
    ],
    benefits: [
      "May help identify and address underlying causes of recurring symptoms",
      "Often leads to improved management of chronic conditions",
      "Supports better long-term health outcomes through proactive care",
      "May reduce need for specialist referrals through comprehensive assessment",
      "Provides a consistent, trusted healthcare relationship over time",
    ],
    faqs: [
      {
        question: "Can I use Perspective Health as my primary care provider?",
        answer:
          "Yes! We welcome new patients seeking primary care. Our providers offer comprehensive primary care services for adults, combining conventional medicine with an integrative approach.",
      },
      {
        question: "Do you accept insurance for primary care visits?",
        answer:
          "We accept most major insurance plans including Wellmark BlueCross BlueShield, Optum/UnitedHealthcare, MidlandsChoice, and Medicare. Please contact our office to verify your specific coverage.",
      },
      {
        question: "How long does an initial primary care appointment take?",
        answer:
          "Initial appointments are typically 60–90 minutes. We invest this time upfront to thoroughly understand your health history, concerns, and goals so we can create the most effective care plan possible.",
      },
      {
        question:
          "What makes your primary care different from a conventional practice?",
        answer:
          "We combine standard primary care with an integrative, functional medicine perspective. This means we look beyond symptoms to understand root causes, use comprehensive testing, and incorporate lifestyle, nutrition, and targeted supplementation alongside conventional treatments.",
      },
    ],
    relatedServices: [
      "hormone-health",
      "integrative-functional-medicine",
      "digestive-metabolic-health",
    ],
  },
  {
    slug: "hormone-health",
    name: "Hormone Health",
    headline: "Hormone Health Services in Iowa",
    metaDescription:
      "Personalized hormone evaluation and balancing in Iowa at Perspective Health. We help men and women experiencing hormonal imbalances reclaim their energy, mood, and vitality.",
    heroImage: "/images/service-hormone-health.jpg",
    heroImageAlt: "Hormone health consultation at Perspective Health Iowa",
    intro:
      "Hormones are the body's chemical messengers — when they're out of balance, virtually every system in your body can feel the impact. At Perspective Health, we take a comprehensive, personalized approach to hormone evaluation and optimization, helping you reclaim your energy, mood, libido, and overall vitality.",
    whatItIs:
      "Our hormone health services encompass thorough evaluation of your hormonal landscape, including thyroid function, sex hormones (estrogen, progesterone, testosterone), adrenal hormones (cortisol, DHEA), and metabolic markers. We use advanced testing to identify imbalances that standard testing often misses, and create individualized treatment plans that may include bioidentical hormone therapy, targeted nutrition, lifestyle modifications, and evidence-based supplementation.",
    whoItsFor: [
      "Women experiencing perimenopause or menopause symptoms (hot flashes, night sweats, mood changes, weight gain)",
      "Men with low testosterone symptoms (fatigue, decreased libido, muscle loss, brain fog)",
      "Adults with thyroid symptoms including fatigue, weight changes, hair loss, or temperature sensitivity",
      "Patients with irregular cycles, PMS, or PCOS",
      "Anyone experiencing unexplained fatigue, mood changes, or difficulty maintaining a healthy weight",
      "Those who have been told their labs are 'normal' but still feel off",
    ],
    whatToExpect: [
      "Comprehensive intake of symptoms, history, and previous lab work",
      "Advanced hormone panel including sex hormones, thyroid, adrenal, and metabolic markers",
      "In-depth results review explaining what each value means for your health",
      "A personalized treatment plan tailored to your symptoms and goals",
      "Options including lifestyle changes, targeted supplements, and/or bioidentical hormone therapy as appropriate",
      "Regular monitoring to optimize your hormone levels and treatment outcomes",
    ],
    benefits: [
      "Often helps improve energy, mental clarity, and mood",
      "May support healthy weight management when hormonal factors are involved",
      "Can help reduce symptoms of perimenopause and menopause",
      "May improve libido, sexual function, and relationship satisfaction",
      "Often associated with better sleep quality and recovery",
      "May support bone density, cardiovascular health, and long-term vitality",
    ],
    faqs: [
      {
        question: "How do I know if my hormones are out of balance?",
        answer:
          "Common signs of hormonal imbalance include unexplained fatigue, brain fog, weight changes despite a healthy diet, mood swings, irregular periods, low libido, poor sleep, hair loss, and hot flashes or night sweats. However, these symptoms overlap with many conditions — a comprehensive evaluation is the best way to identify what's driving your symptoms.",
      },
      {
        question: "What is bioidentical hormone therapy?",
        answer:
          "Bioidentical hormones are chemically identical to the hormones your body naturally produces. They are often used to restore hormonal balance during perimenopause, menopause, or when other hormonal deficiencies are present. Whether bioidentical hormone therapy is appropriate for you depends on a thorough evaluation of your symptoms, labs, and health history.",
      },
      {
        question:
          "My previous doctor said my thyroid levels are normal. Why am I still having symptoms?",
        answer:
          "Standard thyroid panels often test only TSH, which can miss the full picture. We run a comprehensive thyroid panel including Free T3, Free T4, Reverse T3, and thyroid antibodies to get a complete view of thyroid function. Many patients with symptoms have values that fall in the 'normal' range but aren't optimal for how they feel.",
      },
      {
        question: "Do you treat men's hormone health?",
        answer:
          "Absolutely. We evaluate and treat male hormonal imbalances including low testosterone, adrenal dysfunction, and thyroid disorders. Men often experience declining testosterone starting in their 30s–40s, which can significantly impact energy, body composition, mood, and sexual health.",
      },
    ],
    relatedServices: [
      "integrative-functional-medicine",
      "comprehensive-primary-care",
      "digestive-metabolic-health",
    ],
  },
  {
    slug: "integrative-functional-medicine",
    name: "Integrative and Functional Medicine",
    headline: "Integrative & Functional Medicine in Iowa",
    metaDescription:
      "Evidence-based integrative and functional medicine in Iowa at Perspective Health. We identify root causes of chronic illness using advanced testing and personalized treatment plans.",
    heroImage: "/images/service-integrative-medicine.jpg",
    heroImageAlt: "Functional medicine consultation at Perspective Health Iowa",
    intro:
      "Integrative and functional medicine represents a paradigm shift in how we think about health and disease. Rather than simply treating symptoms, we ask why — exploring the complex web of genetic, environmental, lifestyle, and biological factors that influence your health and using that understanding to create lasting, meaningful change.",
    whatItIs:
      "Functional medicine is a systems-based approach that views the body as an interconnected whole. We use advanced diagnostic testing, detailed health timelines, and personalized treatment protocols to address the underlying causes of chronic illness. Integrative medicine combines this with evidence-based conventional care and proven complementary approaches including nutrition therapy, targeted supplementation, mind-body practices, and lifestyle medicine.",
    whoItsFor: [
      "Patients with chronic, complex conditions that haven't responded to conventional treatment",
      "Those dealing with fatigue, brain fog, digestive issues, or chronic pain",
      "Individuals with autoimmune conditions seeking a root-cause approach",
      "Anyone interested in understanding the 'why' behind their health challenges",
      "Patients who want to use food, lifestyle, and targeted strategies as medicine",
    ],
    whatToExpect: [
      "A comprehensive 90-minute initial consultation exploring your full health timeline",
      "Advanced functional lab testing (gut microbiome, nutrient status, inflammation markers, toxin load, and more)",
      "A personalized, prioritized treatment roadmap",
      "Integration of dietary therapy, targeted supplementation, and lifestyle medicine",
      "Ongoing support and regular reassessment to track your progress",
      "Collaboration with your existing healthcare team as needed",
    ],
    benefits: [
      "May help identify root causes of chronic symptoms and conditions",
      "Often supports improved energy, focus, and cognitive function",
      "Can be helpful for managing autoimmune and inflammatory conditions",
      "May support gut health restoration and digestive wellness",
      "Addresses the whole person, not just isolated symptoms",
    ],
    faqs: [
      {
        question:
          "What is the difference between integrative medicine and conventional medicine?",
        answer:
          "Conventional medicine excels at treating acute illness and disease management. Integrative and functional medicine focuses on understanding why disease develops and addressing those root causes. At Perspective Health, we use both — bringing together the best of each approach.",
      },
      {
        question: "How long does it take to see results with functional medicine?",
        answer:
          "This varies significantly based on the complexity of your health history and the conditions being addressed. Some patients notice improvements in weeks; chronic, complex conditions may take months of consistent work. We set realistic expectations and celebrate incremental progress throughout your journey.",
      },
      {
        question:
          "Is functional medicine covered by insurance?",
        answer:
          "Many of our conventional services are covered by insurance. Some functional testing and extended consultations may be billed as out-of-pocket or through HSA/FSA. We're transparent about costs upfront and work to maximize your insurance benefits where possible.",
      },
    ],
    relatedServices: [
      "comprehensive-primary-care",
      "hormone-health",
      "digestive-metabolic-health",
    ],
  },
  {
    slug: "digestive-metabolic-health",
    name: "Digestive & Metabolic Health",
    headline: "Digestive & Metabolic Health Services in Iowa",
    metaDescription:
      "Expert digestive and metabolic health care in Iowa at Perspective Health. We address IBS, SIBO, gut dysbiosis, metabolic syndrome, insulin resistance, and weight management.",
    heroImage: "/images/service-digestive-metabolic.jpg",
    heroImageAlt: "Digestive health consultation at Perspective Health Iowa",
    intro:
      "Your gut is often called the 'second brain' — and for good reason. Digestive health is foundational to everything from immune function and mental wellness to hormonal balance and metabolic health. At Perspective Health, we take a comprehensive, root-cause approach to digestive and metabolic conditions.",
    whatItIs:
      "Our digestive and metabolic health services address the full spectrum of gut health concerns — from common conditions like IBS, bloating, and acid reflux to complex issues like SIBO, intestinal permeability ('leaky gut'), and gut microbiome imbalances. We also specialize in metabolic health, addressing insulin resistance, prediabetes, metabolic syndrome, weight management challenges, and the complex relationship between gut health and metabolism.",
    whoItsFor: [
      "Individuals with chronic digestive symptoms (bloating, constipation, diarrhea, abdominal pain)",
      "Those diagnosed with or suspected of having IBS, IBD, SIBO, or GERD",
      "Patients managing type 2 diabetes, prediabetes, or metabolic syndrome",
      "Anyone struggling with unexplained weight changes or difficulty losing weight",
      "Patients with food sensitivities, intolerances, or suspected leaky gut",
      "Those interested in optimizing gut microbiome health",
    ],
    whatToExpect: [
      "A thorough dietary, symptom, and health history review",
      "Advanced gut testing including microbiome analysis, SIBO breath testing, and intestinal permeability markers",
      "Metabolic evaluation including comprehensive blood sugar testing, insulin markers, and lipid panels",
      "A personalized nutrition and treatment plan",
      "Food sensitivity and elimination diet guidance",
      "Targeted probiotic, prebiotic, and supplement recommendations",
    ],
    benefits: [
      "May help reduce chronic digestive symptoms like bloating, gas, and abdominal discomfort",
      "Often used to support gut microbiome diversity and balance",
      "Can be effective in managing blood sugar and improving insulin sensitivity",
      "May support healthy weight management through metabolic optimization",
      "Often associated with improvements in energy, mood, and cognitive function tied to gut health",
    ],
    faqs: [
      {
        question: "What is SIBO and how do you test for it?",
        answer:
          "Small Intestinal Bacterial Overgrowth (SIBO) occurs when bacteria that normally live in the large intestine migrate and overgrow in the small intestine. We use a non-invasive lactulose or glucose breath test to identify SIBO, measuring hydrogen and methane gas levels produced by excess bacteria.",
      },
      {
        question: "How is metabolic syndrome treated?",
        answer:
          "Metabolic syndrome is a cluster of conditions — elevated blood sugar, blood pressure, cholesterol, and waist circumference — that increase the risk of heart disease and diabetes. Our approach combines targeted nutrition therapy, lifestyle medicine, stress management, and when appropriate, conventional medications to address each component of metabolic syndrome.",
      },
    ],
    relatedServices: [
      "integrative-functional-medicine",
      "hormone-health",
      "supplementary-services",
    ],
  },
  {
    slug: "supplementary-services",
    name: "Supplementary Services",
    headline: "Supplementary Health Services in Iowa",
    metaDescription:
      "Targeted supplementary health services in Iowa at Perspective Health including IV nutrient therapy, nutrition counseling, and wellness support to complement your care plan.",
    heroImage: "/images/service-supplementary.jpg",
    heroImageAlt: "Supplementary health services at Perspective Health Iowa",
    intro:
      "Our supplementary services provide targeted therapeutic support to complement and enhance your primary care and integrative treatment plans. These evidence-informed services address specific health needs and help optimize your body's innate healing capacity.",
    whatItIs:
      "Our supplementary service offerings are designed to fill the gaps that conventional medicine often leaves. Whether you need nutritional repletion through IV therapy, personalized nutrition coaching, stress and adrenal support, or other targeted wellness interventions, our team develops a supplementary plan that integrates seamlessly with your overall care.",
    whoItsFor: [
      "Patients looking to enhance the outcomes of their primary or functional medicine care",
      "Individuals with nutrient deficiencies or malabsorption issues",
      "Those experiencing adrenal fatigue or high-stress symptoms",
      "Patients seeking immune support or enhanced recovery",
      "Anyone interested in evidence-informed wellness optimization",
    ],
    whatToExpect: [
      "Evaluation of your current health status and existing care plan",
      "Targeted testing to identify specific deficiencies or areas for support",
      "A tailored supplementary service recommendation",
      "Integration with your existing treatment plan",
      "Regular reassessment to ensure efficacy and adjust as needed",
    ],
    benefits: [
      "IV nutrient therapy may help rapidly address nutrient deficiencies and support energy",
      "Nutrition counseling often leads to improved dietary patterns and metabolic health",
      "Adrenal support strategies may help improve stress resilience and energy levels",
      "Immune-focused protocols may support your body's natural defenses",
      "Comprehensive supplement guidance helps avoid ineffective or redundant products",
    ],
    faqs: [
      {
        question: "What supplementary services do you offer?",
        answer:
          "Our supplementary offerings include personalized nutrition counseling, targeted supplement protocols, adrenal health support, immune optimization, and wellness consultations. Please contact our office for the most current list of available services.",
      },
      {
        question: "Do I need a primary care relationship with Perspective Health to access supplementary services?",
        answer:
          "While most of our supplementary services are designed to complement an established care relationship with our clinic, we welcome inquiries. Please reach out and we'll help determine the best path forward for your needs.",
      },
    ],
    relatedServices: [
      "integrative-functional-medicine",
      "digestive-metabolic-health",
      "comprehensive-primary-care",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
