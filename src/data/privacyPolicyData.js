import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import UpdateIcon from '@mui/icons-material/Update';
import EmailIcon from '@mui/icons-material/Email';

export const privacyPolicySections = [
    {
        title: "Information We Collect",
        icon: InfoIcon,
        contentType: "grid",
        content: [
            {
                title: "Personal Information",
                description: "When you create an account, we collect your email address, username, and password."
            },
            {
                title: "Usage Data",
                description: "We collect information about how you use our application, including typing speed, accuracy, test results, and practice frequency."
            },
            {
                title: "Technical Data",
                description: "We automatically collect certain information when you visit our application, including IP address, browser type, device information, and operating system."
            }
        ]
    },
    {
        title: "How We Use Your Information",
        icon: InfoIcon,
        contentType: "list",
        content: [
            "To provide, maintain, and improve our services",
            "To personalize your experience and deliver content relevant to your interests",
            "To track your progress and provide performance analytics",
            "To communicate with you about updates, features, or support",
            "To detect, prevent, and address technical issues or security concerns"
        ]
    },
    {
        title: "Data Security",
        icon: SecurityIcon,
        contentType: "security",
        content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments."
    },
    {
        title: "Data Sharing and Disclosure",
        icon: LockIcon,
        contentType: "text",
        content: "We do not sell, trade, or otherwise transfer your personal information to external parties. We may share aggregated, non-personal information for application improvement, research, or marketing purposes."
    },
    {
        title: "Your Rights",
        icon: InfoIcon,
        contentType: "text",
        content: "You have the right to access, update, or delete your personal information. You can manage your account settings or contact us directly to exercise these rights. You may also opt out of certain data collection features through your account settings."
    },
    {
        title: "Children's Privacy",
        icon: ChildCareIcon,
        contentType: "text",
        content: "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will promptly delete it."
    },
    {
        title: "Changes to This Privacy Policy",
        icon: UpdateIcon,
        contentType: "text",
        content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. You are advised to review this Privacy Policy periodically for any changes."
    },
    {
        title: "Contact Us",
        icon: EmailIcon,
        contentType: "contact",
        content: {
            email: "support@typingtestapp.com",
            address: "123 Typing Street, Keyboard City, TC 12345"
        }
    }
];