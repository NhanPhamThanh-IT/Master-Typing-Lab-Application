import GavelIcon from '@mui/icons-material/Gavel';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SecurityIcon from '@mui/icons-material/Security';
import BlockIcon from '@mui/icons-material/Block';
import UpdateIcon from '@mui/icons-material/Update';

export const termsOfUseSections = [
    {
        title: "Acceptance of Terms",
        icon: GavelIcon,
        contentType: "text",
        content: "By accessing or using the Typing Test Application, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this application. The materials contained in this application are protected by applicable copyright and trademark law."
    },
    {
        title: "User Accounts",
        icon: PersonIcon,
        contentType: "list",
        content: [
            "You are responsible for maintaining the confidentiality of your account and password",
            "You accept responsibility for all activities that occur under your account",
            "You must immediately notify us of any unauthorized use of your account",
            "We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion"
        ]
    },
    {
        title: "User Conduct",
        icon: AccountBoxIcon,
        contentType: "grid",
        content: [
            {
                title: "Acceptable Use",
                description: "You may use our application for personal, non-commercial purposes only. Any other use requires prior written consent."
            },
            {
                title: "Prohibited Activities",
                description: "You must not engage in activities that disrupt or interfere with our services, servers, or networks connected to our application."
            },
            {
                title: "Content Guidelines",
                description: "You must not upload, post, or share any content that is unlawful, harmful, threatening, abusive, harassing, or otherwise objectionable."
            }
        ]
    },
    {
        title: "Intellectual Property",
        icon: CopyrightIcon,
        contentType: "security",
        content: "All content included in the Typing Test Application, such as text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations, is the property of the application or its content suppliers and is protected by international copyright laws."
    },
    {
        title: "Limitation of Liability",
        icon: SecurityIcon,
        contentType: "text",
        content: "In no event shall the Typing Test Application, its operators, directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use our services. We do not warrant that the application will be uninterrupted or error-free."
    },
    {
        title: "Prohibited Uses",
        icon: BlockIcon,
        contentType: "list",
        content: [
            "To impersonate any person or entity or falsely state your affiliation",
            "To collect user information without their consent",
            "To interfere with the proper functioning of the application",
            "To bypass any measures we may use to prevent or restrict access",
            "To engage in any automated use of the system"
        ]
    },
    {
        title: "Modifications to Terms",
        icon: UpdateIcon,
        contentType: "text",
        content: "We may revise these Terms of Use at any time without notice. By using this application, you are agreeing to be bound by the then-current version of these Terms of Use. It is your responsibility to check these terms periodically for changes."
    }
];
