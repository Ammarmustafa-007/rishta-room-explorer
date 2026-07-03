import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Sparkles, A as ArrowRight, a as ShoppingBag, b as Search, M as MapPin, H as Heart, X, c as ArrowLeft, C as Check, P as PackageCheck } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/30",
        warm: "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:-translate-y-0.5 hover:bg-secondary/90"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-12 w-full rounded-xl border border-input bg-card/70 px-4 py-2 text-base shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const logo = "/assets/rishta-room-logo-KCRPH-9F.jpg";
const ahmedRaza = "/assets/ahmed-raza-C7HMzGHz.jpg";
const aliKhan = "/assets/ali-khan-BH9evD4o.jpg";
const hamzaTariq = "/assets/hamza-tariq-CpeKoxNt.jpg";
const usmanSheikh = "/assets/usman-sheikh-rvtcHnAX.jpg";
const saadQureshi = "/assets/saad-qureshi-BJQp_2WT.jpg";
const bilalAhmed = "/assets/bilal-ahmed-DeoDQ6Hp.jpg";
const fahadIqbal = "/assets/fahad-iqbal-B9CZDoKB.jpg";
const danishAli = "/assets/danish-ali-CkH30eZ5.jpg";
const talhaNoor = "/assets/talha-noor-Drhmc8iw.jpg";
const ahsanJaved = "/assets/ahsan-javed-DRU8udtL.jpg";
const zainMalik = "/assets/zain-malik-Dy5EFH8R.jpg";
const hamidRaza = "/assets/hamid-raza-CXXdoeJ2.jpg";
const ayeshaNoorPassport = "/assets/ayesha-noor-passport-DVDS_agr.jpg";
const ayeshaNoorFull = "/assets/ayesha-noor-full-Dk7noEf-.jpg";
const hiraKhanPassport = "/assets/hira-khan-passport-wJ1MNeqv.jpg";
const hiraKhanFull = "/assets/hira-khan-full-BjCwP5rL.jpg";
const fatimaAliPassport = "/assets/fatima-ali-passport-DFrNn4vs.jpg";
const fatimaAliFull = "/assets/fatima-ali-full-CYPgixM-.jpg";
const mahnoorAhmedPassport = "/assets/mahnoor-ahmed-passport-xKqU7jyQ.jpg";
const mahnoorAhmedFull = "/assets/mahnoor-ahmed-full-DKJX5_B-.jpg";
const sanaQureshiPassport = "/assets/sana-qureshi-passport-IBCGBGOY.jpg";
const sanaQureshiFull = "/assets/sana-qureshi-full-BZi4Ga43.jpg";
const iqraJavedPassport = "/assets/iqra-javed-passport-Cpl5fVmz.jpg";
const iqraJavedFull = "/assets/iqra-javed-full-9U3M55pg.jpg";
const laibaHassanPassport = "/assets/laiba-hassan-passport-CACSKg5-.jpg";
const laibaHassanFull = "/assets/laiba-hassan-full-C3jFFJUR.jpg";
const zoyaMalikPassport = "/assets/zoya-malik-passport-CDNSzjVb.jpg";
const zoyaMalikFull = "/assets/zoya-malik-full-L3C9xnmM.jpg";
const emanRazaPassport = "/assets/eman-raza-passport-DmepsdHS.jpg";
const emanRazaFull = "/assets/eman-raza-full--67iYjTO.jpg";
const alinaSheikhPassport = "/assets/alina-sheikh-passport-BV0IFbuX.jpg";
const alinaSheikhFull = "/assets/alina-sheikh-full-BvihFlOj.jpg";
const maryamAslamPassport = "/assets/maryam-aslam-passport-DJTtoTkl.jpg";
const maryamAslamFull = "/assets/maryam-aslam-full-D0NoyNLz.jpg";
const areebaTariqPassport = "/assets/areeba-tariq-passport-BsrHAkKr.jpg";
const areebaTariqFull = "/assets/areeba-tariq-full-CAkPOhuY.jpg";
const profileDetailImage = (profile) => profile.detailImage ?? profile.image;
const profiles = [
  // Men
  {
    id: 1,
    name: "Ahmed Raza",
    gender: "man",
    age: 28,
    city: "Lahore",
    country: "Pakistan",
    image: ahmedRaza,
    profession: "Software Engineer",
    tagline: "Stable but career-focused.",
    height: "5′10″",
    skin: "Wheatish",
    education: "BS Computer Science",
    university: "UET Lahore",
    skills: ["Coding", "Driving", "Basic cooking", "House management"],
    hobbies: ["Coding", "Gaming"],
    personality: ["Career focused", "Family oriented", "Modern", "Introvert"],
    family: "Educated middle-class",
    income: "PKR 180k / month",
    physical: ["Medium build", "Brown eyes", "Black straight hair", "Honda Civic", "Johar Town · 5 Marla house"],
    familyDetails: ["From Faisalabad", "Single", "No abroad plans", "Seeks educated, family-oriented partner", "Nuclear family"]
  },
  {
    id: 2,
    name: "Ali Khan",
    gender: "man",
    age: 30,
    city: "Gujranwala",
    country: "Pakistan",
    image: aliKhan,
    profession: "Business Manager",
    tagline: "Financially stable and growth-minded.",
    height: "5′11″",
    skin: "Fair",
    education: "MBA",
    university: "LUMS",
    skills: ["Business", "Driving", "Public speaking"],
    hobbies: ["Gym", "Business podcasts"],
    personality: ["Ambitious", "Modern", "Extrovert", "Responsible"],
    family: "Business family",
    income: "PKR 250k / month",
    physical: ["Athletic", "Dark brown eyes", "Black short hair", "Toyota Fortuner", "Bahria Town · 10 Marla"],
    familyDetails: ["Single", "No abroad plans", "Seeks modern but respectful partner", "Own house & car"]
  },
  {
    id: 3,
    name: "Hamza Tariq",
    gender: "man",
    age: 29,
    city: "Lahore",
    country: "Pakistan",
    image: hamzaTariq,
    profession: "Doctor (Trainee)",
    tagline: "Career in progress, values in place.",
    height: "5′9″",
    skin: "Fair",
    education: "MBBS",
    university: "King Edward Medical University",
    skills: ["Medicine", "Basic cooking", "Driving", "Fitness"],
    hobbies: ["Reading", "Fitness"],
    personality: ["Career focused", "Family oriented", "Religious", "Soft spoken"],
    family: "Professional family",
    income: "PKR 120k / month",
    physical: ["Slim", "Brown eyes", "Black neat hair", "Toyota Corolla", "DHA family home · 1 Kanal"],
    familyDetails: ["Single", "No abroad plans", "Seeks doctor or educated wife", "Established family background"]
  },
  {
    id: 4,
    name: "Usman Sheikh",
    gender: "man",
    age: 31,
    city: "Rawalpindi",
    country: "Pakistan",
    image: usmanSheikh,
    profession: "Civil Engineer",
    tagline: "Stable government job, grounded values.",
    height: "5′10″",
    skin: "Wheatish",
    education: "Civil Engineering",
    university: "NUST",
    skills: ["Construction planning", "Driving", "Sports"],
    hobbies: ["Construction planning", "Sports"],
    personality: ["Religious", "Responsible", "Family oriented", "Introvert"],
    family: "Middle-class family",
    income: "PKR 200k / month",
    physical: ["Medium build", "Brown eyes", "Black hair", "Honda Civic", "DHA · 10 Marla"],
    familyDetails: ["Single", "Government job", "No abroad plans", "Seeks simple, religious partner", "Own house & car"]
  },
  {
    id: 5,
    name: "Saad Qureshi",
    gender: "man",
    age: 32,
    city: "Islamabad",
    country: "Pakistan",
    image: saadQureshi,
    profession: "Finance Manager",
    tagline: "High financial stability.",
    height: "5′11″",
    skin: "Fair",
    education: "ACCA",
    university: "ACCA · Member",
    skills: ["Finance", "Driving", "Public speaking"],
    hobbies: ["Stocks", "Finance"],
    personality: ["Ambitious", "Career focused", "Modern", "Extrovert"],
    family: "Upper middle class",
    income: "PKR 300k / month",
    physical: ["Fit", "Brown eyes", "Black hair", "Mercedes C-Class", "Bahria Town · 1 Kanal"],
    familyDetails: ["Single", "No abroad plans", "Seeks working professional woman", "Property ownership"]
  },
  {
    id: 6,
    name: "Bilal Ahmed",
    gender: "man",
    age: 26,
    city: "Faisalabad",
    country: "Pakistan",
    image: bilalAhmed,
    profession: "Media Professional",
    tagline: "Creative personality with a modern outlook.",
    height: "5′8″",
    skin: "Medium",
    education: "Media Studies",
    university: "GC University Faisalabad",
    skills: ["Content creation", "Basic cooking", "Driving", "Social media"],
    hobbies: ["Social media", "Reels"],
    personality: ["Creative", "Modern", "Extrovert", "Independent"],
    family: "Middle-class family",
    income: "PKR 150k / month",
    physical: ["Slim", "Brown eyes", "Curly black hair", "Suzuki Alto", "Family home"],
    familyDetails: ["Single", "No abroad plans", "Seeks flexible, modern partner", "Creative field"]
  },
  {
    id: 7,
    name: "Fahad Iqbal",
    gender: "man",
    age: 28,
    city: "Lahore",
    country: "Pakistan",
    image: fahadIqbal,
    profession: "Architect",
    tagline: "Artistic mindset with a design-first life.",
    height: "5′10″",
    skin: "Wheatish",
    education: "Architecture",
    university: "NCA Lahore",
    skills: ["Design", "Photography", "Driving"],
    hobbies: ["Design", "Photography"],
    personality: ["Creative", "Modern", "Soft spoken", "Career focused"],
    family: "Educated middle-class",
    income: "PKR 220k / month",
    physical: ["Medium build", "Brown eyes", "Black styled hair", "Honda Civic", "Johar Town · 8 Marla"],
    familyDetails: ["Single", "No abroad plans", "Seeks stylish partner", "Own house & car"]
  },
  {
    id: 8,
    name: "Danish Ali",
    gender: "man",
    age: 29,
    city: "London",
    country: "United Kingdom",
    image: danishAli,
    profession: "Data Scientist",
    tagline: "Settled abroad profile.",
    height: "5′11″",
    skin: "Fair",
    education: "MS Data Science",
    university: "University of Manchester",
    skills: ["Coding", "Intermediate cooking", "Driving", "Travel planning"],
    hobbies: ["Tech", "Travel"],
    personality: ["Career focused", "Modern", "Independent", "Adventurous"],
    family: "Professional family",
    income: "£6,000 / month",
    physical: ["Fit", "Hazel eyes", "Brown-black hair", "BMW (leased)", "Apartment · UK"],
    familyDetails: ["Single", "PR status: Applied", "Seeks simple Pakistani partner", "Settled abroad"]
  },
  {
    id: 9,
    name: "Talha Noor",
    gender: "man",
    age: 27,
    city: "Dubai",
    country: "UAE",
    image: talhaNoor,
    profession: "Economist",
    tagline: "Abroad working profile.",
    height: "5′10″",
    skin: "Wheatish",
    education: "BS Economics",
    university: "LUMS",
    skills: ["Trading", "Basic cooking", "Driving", "Finance"],
    hobbies: ["Trading", "Gym"],
    personality: ["Ambitious", "Modern", "Career focused", "Extrovert"],
    family: "Middle-class family",
    income: "AED 10,000 / month",
    physical: ["Medium build", "Brown eyes", "Black hair", "Toyota Camry", "Shared apartment · Dubai"],
    familyDetails: ["Single", "Work visa", "Seeks partner willing to relocate", "Working abroad"]
  },
  {
    id: 10,
    name: "Ahsan Javed",
    gender: "man",
    age: 28,
    city: "Toronto",
    country: "Canada",
    image: ahsanJaved,
    profession: "Pharmacist",
    tagline: "Settled immigrant with strong roots.",
    height: "5′10″",
    skin: "Fair",
    education: "Pharm-D",
    university: "University of Toronto",
    skills: ["Health research", "Good cooking", "Driving"],
    hobbies: ["Health research", "Cooking"],
    personality: ["Family oriented", "Religious", "Career focused", "Soft spoken"],
    family: "Professional family",
    income: "CAD 7,000 / month",
    physical: ["Medium build", "Brown eyes", "Black hair", "Honda Accord", "Apartment · Canada"],
    familyDetails: ["Single", "PR status: Yes", "Seeks homely, educated partner", "Settled immigrant"]
  },
  {
    id: 11,
    name: "Zain Malik",
    gender: "man",
    age: 25,
    city: "Gujranwala",
    country: "Pakistan",
    image: zainMalik,
    profession: "Psychologist",
    tagline: "Soft personality, sincere intentions.",
    height: "5′8″",
    skin: "Medium",
    education: "Psychology",
    university: "University of Gujrat",
    skills: ["Counselling", "Basic cooking", "Teaching"],
    hobbies: ["Reading", "Helping people"],
    personality: ["Soft spoken", "Religious", "Introvert", "Family oriented"],
    family: "Middle-class family",
    income: "PKR 90k / month",
    physical: ["Slim", "Brown eyes", "Black hair", "Motorbike", "Family home"],
    familyDetails: ["Single", "No abroad plans", "Seeks simple partner", "Joint family"]
  },
  {
    id: 12,
    name: "Hamid Raza",
    gender: "man",
    age: 33,
    city: "Lahore",
    country: "Pakistan",
    image: hamidRaza,
    profession: "Finance Director",
    tagline: "High-status profile with clear priorities.",
    height: "6′0″",
    skin: "Fair",
    education: "MBA Finance",
    university: "LUMS",
    skills: ["Business", "Driving", "Public speaking"],
    hobbies: ["Business", "Gym"],
    personality: ["Ambitious", "Career focused", "Modern", "Extrovert"],
    family: "Upper class",
    income: "PKR 350k / month",
    physical: ["Fit", "Brown eyes", "Black hair", "Mercedes E-Class", "DHA Phase 6 · 1 Kanal"],
    familyDetails: ["Single", "No abroad plans", "Seeks well-educated partner", "Own house & car"]
  },
  // Women
  {
    id: 13,
    name: "Ayesha Noor",
    gender: "woman",
    age: 25,
    city: "Faisalabad",
    country: "Pakistan",
    image: ayeshaNoorPassport,
    detailImage: ayeshaNoorFull,
    profession: "House Officer",
    tagline: "Career-oriented doctor with traditional warmth.",
    height: "5′4″",
    skin: "Fair",
    education: "MBBS",
    university: "Allied Hospital Faisalabad",
    skills: ["Medicine", "Expert cooking", "Teaching", "Driving"],
    hobbies: ["Cooking", "Skincare"],
    personality: ["Career focused", "Family oriented", "Religious", "Soft spoken"],
    family: "Educated middle-class",
    physical: ["Slim", "Brown eyes", "Black long hair", "Family home"],
    familyDetails: ["Single", "No abroad plans", "Seeks doctor or settled groom", "Nuclear family"]
  },
  {
    id: 14,
    name: "Hira Khan",
    gender: "woman",
    age: 27,
    city: "Lahore",
    country: "Pakistan",
    image: hiraKhanPassport,
    detailImage: hiraKhanFull,
    profession: "Psychologist",
    tagline: "Balanced personality, emotionally aware.",
    height: "5′5″",
    skin: "Wheatish",
    education: "Psychology",
    university: "University of Lahore",
    skills: ["Counselling", "Good cooking", "Teaching", "Driving"],
    hobbies: ["Journaling", "Reading"],
    personality: ["Independent", "Soft spoken", "Modern", "Introvert"],
    family: "Middle-class family",
    physical: ["Medium build", "Brown eyes", "Brown-black hair", "Johar Town residence"],
    familyDetails: ["Single", "No abroad plans", "Seeks emotionally mature partner", "Own house"]
  },
  {
    id: 15,
    name: "Fatima Ali",
    gender: "woman",
    age: 24,
    city: "Gujranwala",
    country: "Pakistan",
    image: fatimaAliPassport,
    detailImage: fatimaAliFull,
    profession: "Fashion Designer",
    tagline: "Creative entrepreneur with bold taste.",
    height: "5′3″",
    skin: "Fair",
    education: "Fashion Design",
    university: "Pakistan Institute of Fashion Design",
    skills: ["Design", "Intermediate cooking", "Content creation", "Driving"],
    hobbies: ["Designing", "Makeup"],
    personality: ["Creative", "Modern", "Extrovert", "Independent"],
    family: "Business family",
    physical: ["Slim", "Brown eyes", "Brown dyed hair", "Bahria Town residence"],
    familyDetails: ["Single", "No abroad plans", "Seeks stylish husband", "Entrepreneurial background"]
  },
  {
    id: 16,
    name: "Mahnoor Ahmed",
    gender: "woman",
    age: 26,
    city: "Islamabad",
    country: "Pakistan",
    image: mahnoorAhmedPassport,
    detailImage: mahnoorAhmedFull,
    profession: "Corporate Manager",
    tagline: "Corporate lifestyle, polished and driven.",
    height: "5′6″",
    skin: "Fair",
    education: "BBA",
    university: "Quaid-i-Azam University",
    skills: ["Business", "Good cooking", "Driving", "Public speaking"],
    hobbies: ["Networking", "Travel"],
    personality: ["Ambitious", "Modern", "Career focused", "Extrovert"],
    family: "Upper middle class",
    physical: ["Medium build", "Brown eyes", "Black hair", "DHA Islamabad residence"],
    familyDetails: ["Single", "No abroad plans", "Seeks professional groom", "Professional family"]
  },
  {
    id: 17,
    name: "Sana Qureshi",
    gender: "woman",
    age: 24,
    city: "Lahore",
    country: "Pakistan",
    image: sanaQureshiPassport,
    detailImage: sanaQureshiFull,
    profession: "Nutritionist",
    tagline: "Health-conscious and grounded.",
    height: "5′4″",
    skin: "Wheatish",
    education: "Nutrition Sciences",
    university: "University of Health Sciences",
    skills: ["Nutrition", "Expert cooking", "Fitness", "Teaching"],
    hobbies: ["Fitness", "Cooking"],
    personality: ["Health conscious", "Family oriented", "Modern", "Soft spoken"],
    family: "Middle-class family",
    physical: ["Slim", "Brown eyes", "Brown-black hair", "Family home"],
    familyDetails: ["Single", "No abroad plans", "Seeks fitness-focused groom", "Nuclear family"]
  },
  {
    id: 18,
    name: "Iqra Javed",
    gender: "woman",
    age: 27,
    city: "Faisalabad",
    country: "Pakistan",
    image: iqraJavedPassport,
    detailImage: iqraJavedFull,
    profession: "Chartered Accountant (Inter)",
    tagline: "Career strong with clear ambitions.",
    height: "5′5″",
    skin: "Fair",
    education: "CA Inter",
    university: "ICAP · In progress",
    skills: ["Finance", "Good cooking", "Teaching", "Driving"],
    hobbies: ["Finance", "Books"],
    personality: ["Career focused", "Ambitious", "Independent", "Introvert"],
    family: "Educated middle-class",
    physical: ["Medium build", "Brown eyes", "Black hair", "Johar Town residence"],
    familyDetails: ["Single", "No abroad plans", "Seeks financially stable partner", "Professional family"]
  },
  {
    id: 19,
    name: "Laiba Hassan",
    gender: "woman",
    age: 26,
    city: "London",
    country: "United Kingdom",
    image: laibaHassanPassport,
    detailImage: laibaHassanFull,
    profession: "Software Engineer",
    tagline: "Independent abroad life.",
    height: "5′5″",
    skin: "Fair",
    education: "Software Engineering",
    university: "University of Leeds",
    skills: ["Coding", "Intermediate cooking", "Driving"],
    hobbies: ["Coding", "Coffee culture"],
    personality: ["Independent", "Modern", "Career focused", "Introvert"],
    family: "Professional family",
    physical: ["Fit", "Hazel eyes", "Brown hair", "Shared apartment · UK"],
    familyDetails: ["Single", "PR status: Applied", "Seeks abroad-settled groom", "Working abroad"]
  },
  {
    id: 20,
    name: "Zoya Malik",
    gender: "woman",
    age: 28,
    city: "Toronto",
    country: "Canada",
    image: zoyaMalikPassport,
    detailImage: zoyaMalikFull,
    profession: "Business Analyst",
    tagline: "Modern lifestyle, settled abroad.",
    height: "5′6″",
    skin: "Fair",
    education: "MBA",
    university: "Rotman School of Management",
    skills: ["Business", "Basic cooking", "Driving", "Travel planning"],
    hobbies: ["Travel", "Luxury lifestyle"],
    personality: ["Modern", "Ambitious", "Independent", "Extrovert"],
    family: "Upper middle class",
    physical: ["Fit", "Blue-brown eyes", "Light brown hair", "Apartment · Canada"],
    familyDetails: ["Single", "PR status: Yes", "Seeks settled professional", "Settled abroad"]
  },
  {
    id: 21,
    name: "Eman Raza",
    gender: "woman",
    age: 23,
    city: "Gujranwala",
    country: "Pakistan",
    image: emanRazaPassport,
    detailImage: emanRazaFull,
    profession: "Teacher",
    tagline: "Traditional values, sincere heart.",
    height: "5′3″",
    skin: "Wheatish",
    education: "BS Education",
    university: "University of Gujrat",
    skills: ["Teaching", "Expert cooking", "House management"],
    hobbies: ["Teaching", "Cooking"],
    personality: ["Religious", "Family oriented", "Soft spoken", "Introvert"],
    family: "Middle-class family",
    physical: ["Slim", "Brown eyes", "Black hair", "Family home"],
    familyDetails: ["Single", "No abroad plans", "Seeks simple family man", "Joint family"]
  },
  {
    id: 22,
    name: "Alina Sheikh",
    gender: "woman",
    age: 29,
    city: "Berlin",
    country: "Germany",
    image: alinaSheikhPassport,
    detailImage: alinaSheikhFull,
    profession: "Biotechnologist",
    tagline: "Research background, thoughtful mind.",
    height: "5′5″",
    skin: "Fair",
    education: "Biotechnology",
    university: "Technical University of Munich",
    skills: ["Research", "Good cooking", "Teaching", "Driving"],
    hobbies: ["Science", "Reading"],
    personality: ["Career focused", "Independent", "Introvert", "Modern"],
    family: "Professional family",
    physical: ["Medium build", "Hazel eyes", "Brown hair", "Shared apartment · Germany"],
    familyDetails: ["Single", "PR status: Yes", "Seeks highly educated groom", "Research background"]
  },
  {
    id: 23,
    name: "Maryam Aslam",
    gender: "woman",
    age: 30,
    city: "Lahore",
    country: "Pakistan",
    image: maryamAslamPassport,
    detailImage: maryamAslamFull,
    profession: "English Lecturer",
    tagline: "Intellectual profile with depth.",
    height: "5′6″",
    skin: "Wheatish",
    education: "MA English",
    university: "Government College University",
    skills: ["Teaching", "Good cooking", "Writing", "Public speaking"],
    hobbies: ["Literature", "Writing"],
    personality: ["Intellectual", "Soft spoken", "Family oriented", "Introvert"],
    family: "Educated middle-class",
    physical: ["Medium build", "Brown eyes", "Black hair in bun", "DHA family home"],
    familyDetails: ["Single", "No abroad plans", "Seeks mature, stable groom", "Established family"]
  },
  {
    id: 24,
    name: "Areeba Tariq",
    gender: "woman",
    age: 25,
    city: "Faisalabad",
    country: "Pakistan",
    image: areebaTariqPassport,
    detailImage: areebaTariqFull,
    profession: "Media Professional",
    tagline: "Digital lifestyle, open-minded outlook.",
    height: "5′4″",
    skin: "Medium fair",
    education: "Media Studies",
    university: "GC University Faisalabad",
    skills: ["Branding", "Basic cooking", "Content creation", "Driving"],
    hobbies: ["Social media", "Branding"],
    personality: ["Creative", "Modern", "Extrovert", "Independent"],
    family: "Middle-class family",
    physical: ["Slim", "Brown eyes", "Curly black hair", "Family home"],
    familyDetails: ["Single", "No abroad plans", "Seeks open-minded groom", "Creative field"]
  }
];
function Ambient() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": "true", className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden soft-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-32 top-20 size-96 rounded-full bg-blush/60 blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-1/3 size-[28rem] rounded-full bg-secondary/15 blur-3xl animate-float [animation-delay:-2s]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/3 size-80 rounded-full bg-primary/10 blur-3xl" })
  ] });
}
function Index() {
  const [stage, setStage] = reactExports.useState("splash");
  const [name, setName] = reactExports.useState("");
  const [age, setAge] = reactExports.useState("");
  const [gender, setGender] = reactExports.useState("man");
  const [explore, setExplore] = reactExports.useState("all");
  const [selected, setSelected] = reactExports.useState(null);
  const [cart, setCart] = reactExports.useState(null);
  const [saved, setSaved] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  reactExports.useEffect(() => {
    const timer = window.setTimeout(() => setStage("intro"), 2600);
    return () => window.clearTimeout(timer);
  }, []);
  const visible = reactExports.useMemo(() => profiles.filter((p) => (explore === "all" || p.gender === explore) && `${p.name} ${p.city} ${p.profession}`.toLowerCase().includes(query.toLowerCase())), [explore, query]);
  const canAdd = (profile) => profile.gender !== gender;
  const add = (profile) => {
    if (canAdd(profile)) {
      setCart(profile);
      setSelected(null);
    }
  };
  if (stage === "splash") return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute size-[28rem] rounded-full border border-primary-foreground/20 animate-orbit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "absolute -top-3 left-1/2 text-primary-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-rise text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Rishta Room", className: "mx-auto size-52 rounded-[2.5rem] object-cover shadow-2xl ring-1 ring-primary-foreground/30 sm:size-64" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-xs font-bold uppercase tracking-[.45em] text-primary-foreground/70", children: "A thesis experience" })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ambient, {}),
    stage === "intro" && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto flex min-h-screen max-w-6xl items-center px-5 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full items-center gap-12 lg:grid-cols-[1.1fr_.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-rise", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-accent-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, {}),
          "An interactive thesis"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-7 max-w-3xl font-display text-5xl font-semibold leading-[.98] tracking-tight text-primary sm:text-7xl", children: [
          "Before we find a match, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-shimmer", children: "meet yourself." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground", children: "This experience asks what happens when the language of e-commerce enters the most human of decisions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "glass animate-rise rounded-[2rem] border border-border p-6 shadow-2xl shadow-primary/10 sm:p-8 [animation-delay:.12s]", onSubmit: (e) => {
        e.preventDefault();
        if (name.trim() && Number(age) >= 18) setStage("choose");
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "size-16 rounded-2xl object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold text-primary", children: "Welcome to the room" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tell us a little about you." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold", children: "Your name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Amaan", className: "mt-2", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mt-5 block text-sm font-semibold", children: "Your age" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "18", max: "100", value: age, onChange: (e) => setAge(e.target.value), placeholder: "18+", className: "mt-2", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "text-sm font-semibold", children: "I am a" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-2 gap-3", children: ["man", "woman"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setGender(value), className: `rounded-xl border p-4 text-left capitalize transition-all ${gender === value ? "border-primary bg-primary text-primary-foreground shadow-lg" : "border-border bg-card hover:border-primary/40"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs opacity-70", children: "Exploring perspectives" })
          ] }, value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "lg", className: "mt-7 w-full", type: "submit", children: [
          "Enter Rishta Room ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs text-muted-foreground", children: "Fictional profiles · No data is stored" })
      ] })
    ] }) }),
    stage === "choose" && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto flex min-h-screen max-w-5xl items-center px-5 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center animate-rise", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold uppercase tracking-[.25em] text-secondary", children: [
        "Salaam, ",
        name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl font-semibold text-primary sm:text-7xl", children: "Who would you like to explore?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-muted-foreground", children: "Browse every story freely. Cart actions are only available for cross-gender profiles—mirroring a conventional matchmaking marketplace." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-3", children: ["man", "woman", "all"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setExplore(value), className: `group rounded-[1.5rem] border p-7 text-left transition-all hover:-translate-y-1 ${explore === value ? "border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20" : "glass border-border hover:border-primary/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-bold uppercase tracking-[.2em] opacity-60", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 block font-display text-3xl font-semibold capitalize", children: value === "man" ? "Men" : value === "woman" ? "Women" : "Everyone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 inline-flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform group-hover:translate-x-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {}) })
      ] }, value)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "warm", size: "lg", className: "mt-10 px-10", onClick: () => setStage("browse"), children: [
        "Start building ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, {})
      ] })
    ] }) }),
    stage === "browse" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center gap-4 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Rishta Room", className: "size-11 rounded-xl object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mr-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold leading-none text-primary", children: "Rishta Room" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[.18em] text-muted-foreground", children: "Find your match" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "icon", "aria-label": "Open cart", onClick: () => cart && setStage("cart"), className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, {}),
          cart && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-secondary text-[9px] text-secondary-foreground", children: "1" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-5 md:flex-row md:items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-[.22em] text-secondary", children: [
              "Curated for ",
              name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-4xl font-semibold text-primary sm:text-5xl", children: "People, not products." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
              visible.length,
              " fictional profiles · Look beyond the specifications."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search name, city, profession", className: "pl-11" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap gap-2", children: ["man", "woman", "all"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: explore === value ? "default" : "outline", onClick: () => setExplore(value), className: "capitalize", children: value === "all" ? "Everyone" : `${value === "man" ? "Men" : "Women"}` }, value)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: visible.map((profile, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group animate-rise overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-lg shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl", style: {
          animationDelay: `${index * 70}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(profile), className: "relative block h-80 w-full overflow-hidden bg-white text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile.image, alt: `Portrait of ${profile.name}`, loading: "lazy", width: 1024, height: 1024, className: "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mr-1 inline size-3" }),
              profile.city
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent px-5 pb-5 pt-16 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100", children: "View full character →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-primary", children: [
                  profile.name,
                  ", ",
                  profile.age
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
                  profile.profession,
                  " · ",
                  profile.country
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "mt-1 text-secondary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground", children: profile.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", onClick: () => setSelected(profile), children: "Show details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: canAdd(profile) ? "warm" : "secondary", size: "icon", "aria-label": canAdd(profile) ? `Add ${profile.name} to cart` : "Cart unavailable for same gender", disabled: !canAdd(profile), onClick: () => add(profile), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, {}) })
            ] }),
            !canAdd(profile) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[11px] text-muted-foreground", children: "Available to explore, not to add" })
          ] })
        ] }, profile.id)) })
      ] })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-espresso/60 p-3 backdrop-blur-md", onClick: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "animate-rise relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-card shadow-2xl", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", className: "fixed right-6 top-6 z-10 bg-card sm:absolute", onClick: () => setSelected(null), "aria-label": "Close details", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[.8fr_1.2fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[30rem] items-center justify-center overflow-hidden bg-white lg:sticky lg:top-0 lg:h-[90vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileDetailImage(selected), alt: `Full character portrait of ${selected.name}`, width: 768, height: 1152, className: "h-full max-h-[90vh] w-full object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground", children: selected.gender === "woman" ? "Bride profile" : "Groom profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-5xl font-semibold text-primary", children: selected.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-lg italic text-muted-foreground", children: [
            "“",
            selected.tagline,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-7 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Basic information", items: [`${selected.age} years`, `${selected.city}, ${selected.country}`, "Muslim", "Never married"] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Physical appearance", items: [selected.height, selected.skin, ...selected.physical] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Education", items: [selected.education, selected.university] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: selected.gender === "man" ? "Career" : "Skills", items: selected.gender === "man" ? [selected.profession, selected.income ?? "Private"] : selected.skills }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Skills", items: selected.skills }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Hobbies", items: selected.hobbies }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Personality", items: selected.personality }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Family background", items: [selected.family, ...selected.familyDetails] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky bottom-0 mt-8 flex flex-col gap-3 border-t border-border bg-card/95 pt-5 backdrop-blur sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "lg", onClick: () => setSelected(null), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, {}),
              "Keep exploring"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "warm", size: "lg", className: "flex-1", disabled: !canAdd(selected), onClick: () => add(selected), children: canAdd(selected) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, {}),
              "Add one person to cart"
            ] }) : "Explore only — same gender" })
          ] })
        ] })
      ] })
    ] }) }),
    stage === "cart" && cart && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto min-h-screen max-w-6xl px-5 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStage("browse"), className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, {}),
        "Back to profiles"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 grid gap-12 lg:grid-cols-[1.15fr_.85fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[.25em] text-secondary", children: "Final shopping cart" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-5xl font-semibold text-primary sm:text-6xl", children: [
            "Your “customized” ",
            cart.gender === "woman" ? "bride" : "groom",
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-muted-foreground", children: "The language feels familiar: specifications, selection, delivery. Notice what changes when a person becomes an item." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileDetailImage(cart), alt: cart.name, className: "h-72 w-full bg-white object-contain sm:w-64" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-secondary", children: "1 person selected" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-semibold text-primary", children: cart.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  cart.age,
                  " · ",
                  cart.city,
                  " · ",
                  cart.profession
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: [cart.height, cart.skin, cart.education, cart.university, cart.family, ...cart.income ? [cart.income] : [], ...cart.skills.slice(0, 2), ...cart.hobbies.slice(0, 2)].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-3 py-1.5 text-xs font-medium", children: item }, item)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 border-t border-border p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setCart(null), children: "Remove" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: () => setSaved(!saved), children: [
                saved ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, {}),
                saved ? "Saved" : "Save for later"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "glass h-fit rounded-[2rem] border border-border p-7 shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Order summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "RR-",
              String(cart.id).padStart(4, "0")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 space-y-4 border-y border-border py-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1 human life" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Specifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Not measurable" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Delivery" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Impossible" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "lg", className: "w-full", onClick: () => setStage("final"), children: [
            "Proceed to delivery ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs leading-relaxed text-muted-foreground", children: "There is no checkout. There is a conversation." })
        ] })
      ] })
    ] }),
    stage === "final" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-5 py-16 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-10 top-10 size-24 rounded-full border border-primary-foreground/20 animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-16 right-10 size-40 rounded-full border border-secondary animate-float [animation-delay:-2s]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl text-center animate-rise", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex size-24 items-center justify-center rounded-full bg-secondary shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-11 fill-current" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xs font-bold uppercase tracking-[.4em] text-blush", children: "The end of the order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-6xl font-semibold leading-none sm:text-8xl", children: "Humans are not products." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-primary-foreground/75", children: "A life partner cannot be customized like an online order. Compatibility is not a filter. Love is not a cart. A person is always more than a profile." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-10 max-w-xl rounded-[2rem] border border-primary-foreground/20 bg-primary-foreground/10 p-7 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mx-auto text-secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-3xl italic", children: "Wishing you honesty, grace, and the very best for your future." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "warm", size: "lg", className: "mt-10", onClick: () => {
          setCart(null);
          setStage("choose");
        }, children: [
          "Begin again, differently ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
        ] })
      ] })
    ] })
  ] });
}
function Detail({
  title,
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-[.2em] text-secondary", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground", children: item }, item)) })
  ] });
}
export {
  Index as component
};
