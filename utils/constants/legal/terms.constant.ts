import type { TLegalDocumentByLanguage } from "@/utils/interfaces/legal/legal.interface";
import { SITE } from "@/utils/constants/site.constant";

/**
 * Terms of Service, ported verbatim from the mobile app so the web copy and the
 * in-app copy cannot drift:
 *   apsara-wallet-mobile/lib/features/profile/data/legal_content.dart
 *
 * Any wording change must be made in BOTH places, and the `lastUpdated` stamp
 * bumped in both.
 */
export const TERMS_DOCUMENT: TLegalDocumentByLanguage = {
  en: {
    pageTitle: "Terms of Service",
    lastUpdated: "Last updated: 29 July 2026",
    intro: `Welcome to ${SITE.name}. These Terms of Service ("Terms") govern your use of the ${SITE.name} mobile application and related services (the "Service"). By creating an account or using the Service, you agree to be bound by these Terms.`,
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        paragraphs: [
          `By accessing or using ${SITE.name} you confirm that you are at least 18 years old and are capable of entering into a binding agreement. If you do not agree with any part of these Terms, please do not use the Service.`,
        ],
      },
      {
        id: "your-account",
        title: "2. Your Account",
        paragraphs: [
          "You are responsible for maintaining the confidentiality of your login credentials, PIN and any biometric unlock you enable, and for all activity that occurs under your account.",
          "Notify us immediately if you suspect unauthorised access. We are not liable for any loss arising from your failure to keep your credentials secure.",
        ],
      },
      {
        id: "use-of-service",
        title: "3. Use of the Service",
        paragraphs: [
          `${SITE.name} is a personal finance and expense-tracking tool. It helps you record transactions, organise wallets and budgets, and view analytics about your own spending.`,
          "You agree not to misuse the Service, attempt to disrupt it, or use it for any unlawful purpose, including money laundering or financing prohibited activities.",
        ],
      },
      {
        id: "financial-data",
        title: "4. Your Financial Data",
        paragraphs: [
          "The figures, balances and reports shown in the app are recorded and categorised by you and are provided for informational purposes only. They do not constitute financial, investment or tax advice.",
          "You are responsible for the accuracy of the data you enter. Always verify important figures against your bank or official statements.",
        ],
      },
      {
        id: "availability",
        title: "5. Availability and Changes",
        paragraphs: [
          "We work to keep the Service available and reliable, but we do not guarantee uninterrupted access. Features may be added, changed or removed over time.",
          "We may update these Terms from time to time. Continued use of the Service after an update means you accept the revised Terms.",
        ],
      },
      {
        id: "liability",
        title: "6. Limitation of Liability",
        paragraphs: [
          'To the maximum extent permitted by law, the Service is provided "as is" without warranties of any kind, and we are not liable for indirect, incidental or consequential losses arising from your use of the Service.',
        ],
      },
      {
        id: "termination",
        title: "7. Termination",
        paragraphs: [
          "You may stop using the Service and delete your account at any time. We may suspend or terminate access if these Terms are breached.",
        ],
      },
    ],
  },
  km: {
    pageTitle: "លក្ខខណ្ឌនៃការប្រើប្រាស់",
    lastUpdated: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ៖ ២៩ កក្កដា ២០២៦",
    intro: `សូមស្វាគមន៍មកកាន់ ${SITE.name}។ លក្ខខណ្ឌនៃការប្រើប្រាស់ ("លក្ខខណ្ឌ") ទាំងនេះគ្រប់គ្រងការប្រើប្រាស់កម្មវិធីទូរស័ព្ទ ${SITE.name} និងសេវាកម្មពាក់ព័ន្ធ ("សេវាកម្ម") របស់អ្នក។ ដោយបង្កើតគណនី ឬប្រើប្រាស់សេវាកម្មនេះ អ្នកយល់ព្រមគោរពតាមលក្ខខណ្ឌទាំងនេះ។`,
    sections: [
      {
        id: "acceptance",
        title: "១. ការទទួលយកលក្ខខណ្ឌ",
        paragraphs: [
          `ដោយចូលប្រើ ឬប្រើប្រាស់ ${SITE.name} អ្នកបញ្ជាក់ថាអ្នកមានអាយុយ៉ាងតិច ១៨ ឆ្នាំ និងមានសមត្ថភាពក្នុងការចូលធ្វើកិច្ចព្រមព្រៀងដែលមានកាតព្វកិច្ច។ ប្រសិនបើអ្នកមិនយល់ព្រមនឹងផ្នែកណាមួយនៃលក្ខខណ្ឌទាំងនេះ សូមកុំប្រើប្រាស់សេវាកម្មនេះឡើយ។`,
        ],
      },
      {
        id: "your-account",
        title: "២. គណនីរបស់អ្នក",
        paragraphs: [
          "អ្នកមានទំនួលខុសត្រូវក្នុងការរក្សាការសម្ងាត់នៃព័ត៌មានចូលគណនី លេខសម្ងាត់ (PIN) និងការដោះសោជីវមាត្រណាមួយដែលអ្នកបានបើក ព្រមទាំងសកម្មភាពទាំងអស់ដែលកើតឡើងក្រោមគណនីរបស់អ្នក។",
          "សូមជូនដំណឹងមកយើងភ្លាមៗ ប្រសិនបើអ្នកសង្ស័យថាមានការចូលប្រើដោយគ្មានការអនុញ្ញាត។ យើងមិនទទួលខុសត្រូវចំពោះការបាត់បង់ណាមួយ ដែលបណ្ដាលមកពីការខកខានរបស់អ្នកក្នុងការរក្សាព័ត៌មានសម្ងាត់ឱ្យមានសុវត្ថិភាពឡើយ។",
        ],
      },
      {
        id: "use-of-service",
        title: "៣. ការប្រើប្រាស់សេវាកម្ម",
        paragraphs: [
          `${SITE.name} គឺជាឧបករណ៍គ្រប់គ្រងហិរញ្ញវត្ថុផ្ទាល់ខ្លួន និងតាមដានចំណាយ។ វាជួយអ្នកកត់ត្រាប្រតិបត្តិការ រៀបចំកាបូប និងថវិកា ព្រមទាំងមើលការវិភាគអំពីការចំណាយផ្ទាល់ខ្លួនរបស់អ្នក។`,
          "អ្នកយល់ព្រមមិនប្រើប្រាស់សេវាកម្មនេះខុសវិធី មិនប៉ុនប៉ងបង្អាក់វា ឬប្រើវាសម្រាប់គោលបំណងខុសច្បាប់ណាមួយ រួមទាំងការលាងលុយ ឬការផ្ដល់ហិរញ្ញប្បទានដល់សកម្មភាពហាមឃាត់។",
        ],
      },
      {
        id: "financial-data",
        title: "៤. ទិន្នន័យហិរញ្ញវត្ថុរបស់អ្នក",
        paragraphs: [
          "តួលេខ សមតុល្យ និងរបាយការណ៍ដែលបង្ហាញក្នុងកម្មវិធី ត្រូវបានកត់ត្រា និងចាត់ថ្នាក់ដោយអ្នក ហើយផ្ដល់ជូនសម្រាប់គោលបំណងផ្ដល់ព័ត៌មានតែប៉ុណ្ណោះ។ វាមិនមែនជាការណែនាំផ្នែកហិរញ្ញវត្ថុ ការវិនិយោគ ឬពន្ធដារឡើយ។",
          "អ្នកមានទំនួលខុសត្រូវចំពោះភាពត្រឹមត្រូវនៃទិន្នន័យដែលអ្នកបញ្ចូល។ សូមផ្ទៀងផ្ទាត់តួលេខសំខាន់ៗជាមួយធនាគារ ឬរបាយការណ៍ផ្លូវការរបស់អ្នកជានិច្ច។",
        ],
      },
      {
        id: "availability",
        title: "៥. ភាពអាចប្រើបាន និងការផ្លាស់ប្ដូរ",
        paragraphs: [
          "យើងខិតខំរក្សាសេវាកម្មឱ្យអាចប្រើប្រាស់បាន និងអាចទុកចិត្តបាន ប៉ុន្តែយើងមិនធានាការចូលប្រើដោយគ្មានការរអាក់រអួលឡើយ។ មុខងារនានាអាចត្រូវបានបន្ថែម ផ្លាស់ប្ដូរ ឬដកចេញតាមពេលវេលា។",
          "យើងអាចធ្វើបច្ចុប្បន្នភាពលក្ខខណ្ឌទាំងនេះ ពីពេលមួយទៅពេលមួយ។ ការបន្តប្រើប្រាស់សេវាកម្មបន្ទាប់ពីការធ្វើបច្ចុប្បន្នភាព មានន័យថាអ្នកទទួលយកលក្ខខណ្ឌដែលបានកែប្រែ។",
        ],
      },
      {
        id: "liability",
        title: "៦. ការកំណត់ការទទួលខុសត្រូវ",
        paragraphs: [
          'ក្នុងវិសាលភាពអតិបរមាដែលច្បាប់អនុញ្ញាត សេវាកម្មនេះត្រូវបានផ្ដល់ជូន "ដូចដែលមាន" ដោយគ្មានការធានាណាមួយឡើយ ហើយយើងមិនទទួលខុសត្រូវចំពោះការបាត់បង់ដោយប្រយោល ដោយចៃដន្យ ឬជាលទ្ធផលបន្ទាប់បន្សំ ដែលបណ្ដាលមកពីការប្រើប្រាស់សេវាកម្មរបស់អ្នកឡើយ។',
        ],
      },
      {
        id: "termination",
        title: "៧. ការបញ្ចប់",
        paragraphs: [
          "អ្នកអាចឈប់ប្រើប្រាស់សេវាកម្ម និងលុបគណនីរបស់អ្នកនៅពេលណាក៏បាន។ យើងអាចផ្អាក ឬបញ្ចប់ការចូលប្រើ ប្រសិនបើលក្ខខណ្ឌទាំងនេះត្រូវបានបំពាន។",
        ],
      },
    ],
  },
};
