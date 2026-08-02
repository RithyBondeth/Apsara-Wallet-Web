import type { TLegalDocumentByLanguage } from "@/utils/interfaces/legal/legal.interface";
import { SITE } from "@/utils/constants/site.constant";

/**
 * Privacy Policy, ported verbatim from the mobile app so the web copy and the
 * in-app copy cannot drift:
 *   apsara-wallet-mobile/lib/features/profile/data/legal_content.dart
 *
 * This is the document app-store listings point at, so the public URL must stay
 * stable at /privacy. Any wording change must be made in BOTH places, and the
 * `lastUpdated` stamp bumped in both.
 */
export const PRIVACY_DOCUMENT: TLegalDocumentByLanguage = {
  en: {
    pageTitle: "Privacy Policy",
    lastUpdated: "Last updated: 29 July 2026",
    intro: `Your privacy matters to us. This Privacy Policy explains what information ${SITE.name} collects, how it is used, and the choices you have. We only collect what is needed to run the Service.`,
    sections: [
      {
        id: "information-we-collect",
        title: "1. Information We Collect",
        paragraphs: [],
        bullets: [
          "Account information: your name, email address and phone number, provided when you register.",
          "Financial records you create: transactions, wallets, budgets, savings goals and categories that you enter into the app.",
          "Device information: basic technical data (such as app version and device type) used to keep the app secure and working correctly.",
        ],
      },
      {
        id: "how-we-use",
        title: "2. How We Use Your Information",
        paragraphs: [
          "We use your information to provide core features — recording and displaying your finances, generating analytics and insights, and sending notifications you have enabled.",
          "We do not sell your personal or financial data to third parties.",
        ],
      },
      {
        id: "security",
        title: "3. Data Security",
        paragraphs: [
          "Your credentials are stored using industry-standard hashing, and sensitive data on your device can be protected with a PIN or biometric lock that you control.",
          "While we take reasonable measures to protect your data, no method of transmission or storage is completely secure.",
        ],
      },
      {
        id: "on-device",
        title: "4. On-Device Processing",
        paragraphs: [
          "Features such as receipt scanning and spending insights run on your device wherever possible, so your raw data stays with you.",
        ],
      },
      {
        id: "your-rights",
        title: "5. Your Choices and Rights",
        paragraphs: [
          "You can view and edit your profile, export your transactions, and request deletion of your account and associated data at any time from within the app.",
          "You can control notification permissions and app-lock settings on your device.",
        ],
      },
      {
        id: "retention",
        title: "6. Data Retention",
        paragraphs: [
          "We retain your information for as long as your account is active. When you delete your account, we remove your personal data except where retention is required by law.",
        ],
      },
      {
        id: "changes",
        title: "7. Changes to This Policy",
        paragraphs: [
          "We may update this Policy as the Service evolves. Material changes will be highlighted in the app.",
        ],
      },
    ],
  },
  km: {
    pageTitle: "គោលការណ៍ឯកជនភាព",
    lastUpdated: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ៖ ២៩ កក្កដា ២០២៦",
    intro: `ឯកជនភាពរបស់អ្នកមានសារៈសំខាន់សម្រាប់យើង។ គោលការណ៍ឯកជនភាពនេះពន្យល់អំពីព័ត៌មានអ្វីខ្លះដែល ${SITE.name} ប្រមូល របៀបប្រើប្រាស់វា និងជម្រើសដែលអ្នកមាន។ យើងប្រមូលតែអ្វីដែលចាំបាច់សម្រាប់ដំណើរការសេវាកម្មប៉ុណ្ណោះ។`,
    sections: [
      {
        id: "information-we-collect",
        title: "១. ព័ត៌មានដែលយើងប្រមូល",
        paragraphs: [],
        bullets: [
          "ព័ត៌មានគណនី៖ ឈ្មោះ អាសយដ្ឋានអ៊ីមែល និងលេខទូរស័ព្ទរបស់អ្នក ដែលបានផ្ដល់ពេលអ្នកចុះឈ្មោះ។",
          "កំណត់ត្រាហិរញ្ញវត្ថុដែលអ្នកបង្កើត៖ ប្រតិបត្តិការ កាបូប ថវិកា គោលដៅសន្សំ និងប្រភេទដែលអ្នកបញ្ចូលក្នុងកម្មវិធី។",
          "ព័ត៌មានឧបករណ៍៖ ទិន្នន័យបច្ចេកទេសមូលដ្ឋាន (ដូចជាកំណែកម្មវិធី និងប្រភេទឧបករណ៍) ដែលប្រើដើម្បីរក្សាកម្មវិធីឱ្យមានសុវត្ថិភាព និងដំណើរការត្រឹមត្រូវ។",
        ],
      },
      {
        id: "how-we-use",
        title: "២. របៀបដែលយើងប្រើប្រាស់ព័ត៌មានរបស់អ្នក",
        paragraphs: [
          "យើងប្រើប្រាស់ព័ត៌មានរបស់អ្នកដើម្បីផ្ដល់មុខងារស្នូល — កត់ត្រា និងបង្ហាញហិរញ្ញវត្ថុរបស់អ្នក បង្កើតការវិភាគ និងការយល់ដឹង ព្រមទាំងផ្ញើការជូនដំណឹងដែលអ្នកបានបើក។",
          "យើងមិនលក់ទិន្នន័យផ្ទាល់ខ្លួន ឬហិរញ្ញវត្ថុរបស់អ្នកទៅឱ្យភាគីទីបីឡើយ។",
        ],
      },
      {
        id: "security",
        title: "៣. សុវត្ថិភាពទិន្នន័យ",
        paragraphs: [
          "ព័ត៌មានសម្ងាត់របស់អ្នកត្រូវបានរក្សាទុកដោយប្រើ hashing តាមស្តង់ដារឧស្សាហកម្ម ហើយទិន្នន័យរសើបនៅលើឧបករណ៍របស់អ្នកអាចត្រូវបានការពារ ដោយលេខសម្ងាត់ (PIN) ឬការចាក់សោជីវមាត្រ ដែលអ្នកគ្រប់គ្រង។",
          "ខណៈពេលដែលយើងចាត់វិធានការសមហេតុផលដើម្បីការពារទិន្នន័យរបស់អ្នក គ្មានវិធីសាស្ត្របញ្ជូន ឬរក្សាទុកណាមួយ មានសុវត្ថិភាពពេញលេញនោះឡើយ។",
        ],
      },
      {
        id: "on-device",
        title: "៤. ការដំណើរការនៅលើឧបករណ៍",
        paragraphs: [
          "មុខងារដូចជាការស្កេនវិក្កយបត្រ និងការយល់ដឹងអំពីការចំណាយ ដំណើរការនៅលើឧបករណ៍របស់អ្នកតាមដែលអាចធ្វើទៅបាន ដូច្នេះទិន្នន័យដើមរបស់អ្នកនៅជាមួយអ្នក។",
        ],
      },
      {
        id: "your-rights",
        title: "៥. ជម្រើស និងសិទ្ធិរបស់អ្នក",
        paragraphs: [
          "អ្នកអាចមើល និងកែសម្រួលប្រវត្តិរូបរបស់អ្នក នាំចេញប្រតិបត្តិការរបស់អ្នក និងស្នើសុំលុបគណនី និងទិន្នន័យពាក់ព័ន្ធរបស់អ្នកនៅពេលណាក៏បាន ពីក្នុងកម្មវិធី។",
          "អ្នកអាចគ្រប់គ្រងការអនុញ្ញាតការជូនដំណឹង និងការកំណត់ចាក់សោកម្មវិធីនៅលើឧបករណ៍របស់អ្នក។",
        ],
      },
      {
        id: "retention",
        title: "៦. ការរក្សាទុកទិន្នន័យ",
        paragraphs: [
          "យើងរក្សាទុកព័ត៌មានរបស់អ្នករយៈពេលដរាបណាគណនីរបស់អ្នកនៅសកម្ម។ ពេលអ្នកលុបគណនីរបស់អ្នក យើងនឹងលុបទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នកចេញ លើកលែងតែករណីដែលច្បាប់តម្រូវឱ្យរក្សាទុក។",
        ],
      },
      {
        id: "changes",
        title: "៧. ការផ្លាស់ប្ដូរគោលការណ៍នេះ",
        paragraphs: [
          "យើងអាចធ្វើបច្ចុប្បន្នភាពគោលការណ៍នេះ នៅពេលសេវាកម្មវិវឌ្ឍ។ ការផ្លាស់ប្ដូរសំខាន់ៗនឹងត្រូវបានបញ្ជាក់ក្នុងកម្មវិធី។",
        ],
      },
    ],
  },
};
