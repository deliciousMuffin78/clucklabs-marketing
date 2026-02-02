"use client";

interface PrivacyContentProps {
  showTitle?: boolean;
  className?: string;
}

export default function PrivacyContent({ showTitle = true, className = "" }: PrivacyContentProps) {
  return (
    <div className={`container mx-auto max-w-4xl px-4 ${className}`}>
      {showTitle && (
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          Privacy Policy
        </h1>
      )}
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-2 text-sm text-body-color font-semibold">
          Last Updated: January 30, 2026
        </p>

        <p className="mb-8 text-body-color">
          This Privacy Policy ("Privacy Policy") describes how Cluck Labs, Inc., a Delaware corporation, doing business as Cluck ("Cluck," "we," "us," or "our") collects, uses, stores, processes, discloses, and otherwise handles information relating to you in connection with your access to and use of our website, mobile application(s), and related products, features, content, tools, and services (collectively, the "Services").
        </p>

        <p className="mb-8 text-body-color">
          This Privacy Policy applies to all users of the Services, including website visitors, registered users, and mobile application users.
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Acceptance and Scope
          </h2>
          <p className="mb-4 text-body-color font-semibold">
            PLEASE READ THIS PRIVACY POLICY CAREFULLY.
          </p>
          <p className="mb-4 text-body-color">
            By accessing, installing, registering for, or using any part of the Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy, as well as our Terms of Use available at https://clucklabs.com/terms (the "Terms"), which are incorporated herein by reference.
          </p>
          <p className="mb-4 text-body-color">
            If you do not agree with this Privacy Policy or the Terms, you must not access or use the Services.
          </p>
          <p className="mb-4 text-body-color">
            This Privacy Policy governs only information collected by Cluck through the Services and does not apply to information collected by third parties, including through third-party applications, websites, devices, platforms, or services that may integrate with or be accessible through the Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Nature of the Services; No Medical Relationship
          </h2>
          <p className="mb-4 text-body-color">
            Cluck provides fitness, wellness, educational, organizational, and lifestyle-oriented tools, including optional AI-powered insights and goal-oriented features. Cluck is not a medical provider, does not provide medical services, and does not establish a doctor-patient or other healthcare relationship.
          </p>
          <p className="mb-4 text-body-color">
            Information collected or generated through the Services—including any health-, fitness-, or activity-related information—is used solely to support the functionality of the Services and is not intended for diagnosis, treatment, prevention, or cure of any disease or medical condition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Personal Information We Collect
          </h2>
          <p className="mb-4 text-body-color">
            We collect information in multiple ways depending on how you interact with the Services. The categories of personal information we may collect include, without limitation:
          </p>

          <div className="mb-4 space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Contact and Account Information</h3>
              <p className="text-body-color">
                Information you provide when creating or maintaining an account, such as your name, email address, username, password, profile photo, and other profile-related details you voluntarily submit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">2. User-Generated Content</h3>
              <p className="text-body-color">
                Information you choose to input, upload, log, or otherwise submit through the Services, including but not limited to fitness activities, workouts, goals, schedules, notes, dietary entries, and other self-reported data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">3. Health-Related Information</h3>
              <p className="text-body-color">
                Certain health- or activity-related data may be collected or accessed only as described in the section titled "Third-Party Health Information" below.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">4. Payment and Transactional Information</h3>
              <p className="text-body-color">
                Information related to purchases, subscriptions, fees, or other transactions conducted through the Services. Cluck does not store full payment card numbers. Payment information is collected and processed directly by third-party payment processors under their own terms and privacy policies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">5. AI Interaction Data</h3>
              <p className="text-body-color">
                Information you submit when interacting with AI-powered features, including prompts, messages, inputs, and related contextual data, as further described below.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">6. Device and Usage Information</h3>
              <p className="text-body-color">
                Information automatically collected when you access the Services, such as IP address, general geographic region, device type, operating system, app version, usage patterns, and interaction logs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">7. Inferences</h3>
              <p className="text-body-color">
                We may generate internal inferences or classifications based on the information described above to support functionality, personalization, safety, and service improvement.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            General Data Processing Principles
          </h2>
          <p className="mb-4 text-body-color">
            Without limiting any other provision of this Privacy Policy:
          </p>
          <ul className="mb-4 list-disc pl-6 text-body-color space-y-3">
            <li>We collect and process information only to the extent reasonably necessary to operate, maintain, secure, improve, and support the Services.</li>
            <li>We may process information for internal analytics, debugging, security, compliance, and legal purposes.</li>
            <li>We reserve the right to retain information as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Third-Party Health Information
          </h2>
          <p className="mb-4 text-body-color">
            At your direction and only with your explicit permission, the Services may connect to certain third-party applications, devices, platforms, or services (collectively, "Third-Party Applications"), which may include, without limitation, Apple Health, wearable devices, laboratories, testing services, or other third-party data providers.
          </p>
          <p className="mb-4 text-body-color">
            If you authorize such connections, Cluck may import limited health-, fitness-, activity-, or lifestyle-related data made available by those Third-Party Applications. This data may include, by way of example only: activity metrics, exercise information, heart rate, sleep data, blood oxygen levels, respiratory rate, height, weight, age, or similar measurements. If you authorize connections to laboratory or testing services, imported data may include test results provided by those services.
          </p>
          <p className="mb-4 text-body-color">
            All data imported from Third-Party Applications is referred to collectively as "Health Information."
          </p>

          <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
            Important Disclosures Regarding Third-Party Health Information
          </h3>
          <ul className="mb-4 list-disc pl-6 text-body-color space-y-3">
            <li>Cluck does not create, verify, endorse, validate, or control Health Information provided by Third-Party Applications.</li>
            <li>Cluck has no responsibility for the accuracy, completeness, timeliness, legality, reliability, or clinical validity of any Health Information.</li>
            <li>Health Information is provided "as is" and "as available."</li>
            <li>You acknowledge that Third-Party Applications operate independently from Cluck and are governed by their own terms, privacy policies, permissions, and data practices.</li>
            <li>You are solely responsible for reviewing, understanding, and accepting the terms and privacy practices of any Third-Party Application before enabling a connection.</li>
            <li>Cluck does not require you to connect any Third-Party Applications to use the Services. Enabling such connections is entirely optional and may be disabled by you at any time through your device, operating system, or the applicable Third-Party Application.</li>
            <li>Health Information accessed through Third-Party Applications is used solely to support the functionality of the Services, including optional features you choose to enable. Health Information is not used for advertising or marketing purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            How We Collect Your Personal Information
          </h2>
          <p className="mb-4 text-body-color">
            We collect personal information through the following sources and methods:
          </p>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Information You Provide Directly</h3>
              <p className="text-body-color mb-3">
                We collect information you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Create or manage an account</li>
                <li>Use features of the Services</li>
                <li>Submit forms or content</li>
                <li>Communicate with us (including customer support)</li>
                <li>Configure preferences or settings</li>
                <li>Enable optional features (including AI-powered features)</li>
              </ul>
              <p className="text-body-color">
                By providing information to Cluck or using the Services, you affirmatively consent to the collection, use, storage, processing, and disclosure of such information in accordance with this Privacy Policy and applicable law.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Information Collected Automatically</h3>
              <p className="text-body-color mb-3">
                When you access or use the Services, we automatically collect certain technical, device, and usage information, which may include:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>IP address</li>
                <li>General geographic region (not precise location)</li>
                <li>Device identifiers</li>
                <li>Operating system and app version</li>
                <li>Log files, timestamps, and interaction data</li>
                <li>Crash reports and performance metrics</li>
              </ul>
              <p className="text-body-color">
                This information is collected to operate, secure, monitor, debug, improve, and support the Services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">3. Information From Third-Party Applications</h3>
              <p className="text-body-color mb-3">
                If you choose to connect Third-Party Applications, we may collect Health Information or other data made available by those applications only to the extent you authorize.
              </p>
              <p className="text-body-color mb-3">
                By enabling any Third-Party Application connection, you expressly consent to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>The transfer of data from the Third-Party Application to Cluck</li>
                <li>Cluck's processing of that data in accordance with this Privacy Policy</li>
                <li>Any associated data transfers, including cross-border transfers where applicable</li>
              </ul>
              <p className="text-body-color">
                You acknowledge that revoking access from a Third-Party Application may not retroactively delete data already received by Cluck, subject to retention and deletion practices described elsewhere in this Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Where Your Information Is Stored
          </h2>
          <p className="mb-6 text-body-color">
            Cluck stores and processes personal information using a combination of secure third-party infrastructure providers and, in limited cases, your own device, depending on the type of information and the features you choose to enable.
          </p>

          <div className="mb-6 space-y-6">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Account, Contact, and User-Generated Information</h3>
              <p className="text-body-color">
                Contact information (such as name and email address), account credentials, and non-biometric user-generated content (including logged activities, workouts, goals, schedules, and similar data) are stored and processed on secure third-party cloud infrastructure so that the Services can function properly, synchronize across devices, and provide continuity of use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Health Information</h3>
              <p className="text-body-color mb-3">
                Health Information imported from Third-Party Applications may be stored and processed in different locations depending on the feature:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>By default, certain biometric or health-related data is stored and processed locally on your device, subject to the design and permissions of your operating system and connected Third-Party Applications.</li>
                <li>Cluck does not routinely access or store biometric Health Information in the cloud unless you explicitly enable features that require cloud processing.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">3. Optional Features and AI-Powered Functionality</h3>
              <p className="text-body-color mb-3">
                If you enable optional features—such as Cluck Intelligence—certain limited Health Information or related contextual data may be transmitted to and processed by third-party cloud hosting providers and artificial intelligence technology partners.
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Only the minimum information reasonably necessary to generate the requested functionality is transmitted.</li>
                <li>Certain categories of sensitive data, including reproductive health information, are excluded by default unless you expressly opt in.</li>
                <li>Once transmitted, such data is subject to the technical and organizational safeguards of those third-party providers.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">4. Geographic Location of Processing</h3>
              <p className="text-body-color mb-3">
                Cluck is based in the United States, and personal information is generally stored and processed in the United States.
              </p>
              <p className="text-body-color mb-3">
                By accessing or using the Services, you expressly consent to the transfer, storage, and processing of your personal information in the United States or other jurisdictions where Cluck or its service providers operate. You acknowledge that data protection laws in these jurisdictions may differ from those in your country of residence and may not offer the same level of protection.
              </p>
              <p className="text-body-color">
                In certain circumstances, governmental authorities, courts, or regulatory bodies in these jurisdictions may have lawful access to your information.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            How We Use Collected Information
          </h2>
          <p className="mb-6 text-body-color">
            We collect and use personal information for legitimate business purposes related to operating, maintaining, and improving the Services. These purposes include, without limitation:
          </p>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Providing and Operating the Services</h3>
              <p className="text-body-color">
                To create and manage accounts, deliver requested features, process transactions, enable optional functionality, and otherwise provide the Services as intended.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Personalization and Insights</h3>
              <p className="text-body-color">
                To support goal-oriented features, activity summaries, progress indicators, and optional insights intended to help you better understand your usage of the Services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">3. AI-Powered Features (If Enabled)</h3>
              <p className="text-body-color">
                If you choose to enable AI-powered features, we may use limited personal information and Health Information to generate responses, summaries, or educational guidance. AI-generated outputs are informational only and are not medical advice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">4. Service Improvement and Analytics</h3>
              <p className="text-body-color">
                To analyze usage patterns, diagnose technical issues, improve performance, develop new features, and enhance the overall quality and reliability of the Services. Where feasible, we use aggregated, anonymized, or de-identified data for these purposes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">5. Communications</h3>
              <p className="text-body-color">
                To respond to inquiries, provide customer support, send service-related notices, notify you of changes to the Services or policies, and deliver non-promotional operational communications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">6. Safety, Security, and Legal Compliance</h3>
              <p className="text-body-color">
                To protect the rights, safety, and property of Cluck, our users, and others; detect and prevent misuse, abuse, unauthorized access, or unlawful activity; enforce our Terms; and comply with applicable legal obligations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">7. Restrictions on Use of Health Information</h3>
              <p className="text-body-color">
                Health Information is not used for advertising, targeted marketing, or sale. Any use of Health Information is limited to supporting the functionality of the Services and only to the extent you authorize.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            To Whom We Share Your Personal Information
          </h2>
          <p className="mb-6 text-body-color">
            Cluck does not sell your personal information. We disclose personal information only as reasonably necessary to operate the Services, comply with legal obligations, protect Cluck and others, or as expressly authorized by you. Any sharing is limited to the scope and purposes described in this Privacy Policy and consistent with applicable law.
          </p>

          <p className="mb-6 text-body-color">
            We may share personal information with the following categories of recipients and in the following circumstances:
          </p>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">1. With Your Consent or at Your Direction</h3>
              <p className="text-body-color mb-3">
                We may share or disclose personal information with your consent or at your request/direction, including to enable features, integrations, or transactions you initiate.
              </p>
              <p className="text-body-color mb-3">
                Consent may be obtained electronically and through actions such as:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Accepting this Privacy Policy or the Terms</li>
                <li>Enabling optional features or integrations</li>
                <li>Granting permissions through device or operating system settings</li>
                <li>Submitting information through the Services</li>
                <li>Other affirmative actions indicating authorization</li>
              </ul>
              <p className="text-body-color mt-3">
                You are responsible for the scope of permissions you grant and for reviewing the privacy practices of any third party you choose to engage.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Service Providers and Vendors (Business Operations)</h3>
              <p className="text-body-color mb-3">
                We may share personal information with third-party service providers, contractors, and vendors who perform services on our behalf and solely for Cluck's business purposes, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Data storage, security, and fraud-prevention providers</li>
                <li>Payment processors</li>
                <li>Customer support tools</li>
                <li>Email and communication service providers</li>
                <li>Analytics, monitoring, and diagnostics providers</li>
              </ul>
              <p className="text-body-color mb-3">
                These service providers are contractually required to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Use personal information only as necessary to provide services to Cluck</li>
                <li>Maintain appropriate confidentiality and security safeguards</li>
                <li>Not sell personal information or use it for their own independent purposes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">3. AI Providers (Only If You Enable AI Features)</h3>
              <p className="text-body-color mb-3">
                If you enable optional AI-powered features (such as Cluck Intelligence), we may share limited and context-specific information, including certain Health Information, with third-party cloud hosting and artificial intelligence technology providers (including large language model providers) solely to generate the requested functionality.
              </p>
              <p className="text-body-color">
                Such sharing is restricted to the minimum data reasonably necessary for the feature. Cluck does not authorize these providers to use such data for unrelated purposes, except as permitted by applicable law and the applicable provider agreements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">4. Research, Development, and Service Improvement</h3>
              <p className="text-body-color">
                We may share aggregated, anonymized, or de-identified information with third parties for research, development, analytics, or service improvement purposes. Information shared for these purposes is intended not to reasonably identify you and is subject to confidentiality obligations where applicable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">5. Affiliates and Subsidiaries</h3>
              <p className="text-body-color">
                We may share personal information with our current or future affiliates and subsidiaries for purposes consistent with this Privacy Policy, including operating, maintaining, securing, and improving the Services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">6. Non-Affiliated Third Parties to Facilitate the Services</h3>
              <p className="text-body-color mb-3">
                In limited circumstances, we may share personal information with non-affiliated third parties to facilitate your access to or use of the Services or to support business operations. These third parties may include, without limitation, operating systems and platforms, infrastructure providers, analytics providers, professional advisors, and governmental entities.
              </p>
              <p className="text-body-color">
                Cluck does not control and is not responsible for how non-affiliated third parties use information after disclosure, except to the extent required by applicable law or contractual obligations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">7. Legal, Regulatory, and Compliance Purposes; Protection of Rights</h3>
              <p className="text-body-color mb-3">
                We may disclose personal information if we believe, in good faith, that such disclosure is reasonably necessary to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Comply with applicable laws, regulations, legal process, subpoenas, court orders, or lawful governmental requests</li>
                <li>Respond to lawful requests from governmental, regulatory, or law enforcement authorities</li>
                <li>Enforce our Terms or other agreements</li>
                <li>Detect, prevent, or address security incidents, misuse, fraud, unauthorized access, or technical issues</li>
                <li>Protect the rights, property, safety, or security of Cluck, our users, or others</li>
              </ul>
              <p className="text-body-color">
                Such disclosures may occur without prior notice to you where permitted by law.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">8. Business Transfers and Corporate Transactions</h3>
              <p className="text-body-color mb-3">
                We may disclose or transfer personal information in connection with any actual or contemplated corporate transaction, including a merger, acquisition, financing, reorganization, sale or transfer of assets, joint venture, bankruptcy, insolvency, or receivership.
              </p>
              <p className="text-body-color">
                In such events, personal information may be transferred as a business asset, and recipients may continue to use such information in accordance with this Privacy Policy or a successor policy, subject to applicable law. Any such recipients may be required to maintain confidentiality protections consistent with this Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Cluck Intelligence & Third-Party Artificial Intelligence Technology
          </h2>
          <p className="mb-6 text-body-color">
            Cluck may offer optional artificial intelligence–powered features, tools, or experiences, including but not limited to Cluck Intelligence (collectively, "AI Features"). These AI Features are provided solely to support educational, informational, organizational, and goal-oriented aspects of the Services.
          </p>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Optional Feature; User-Initiated</h3>
              <p className="text-body-color mb-3">
                AI Features are entirely optional and are activated only if you affirmatively choose to enable or interact with them. You are not required to use AI Features to access or use the core functionality of the Services.
              </p>
              <p className="text-body-color">
                By enabling or interacting with AI Features, you expressly consent to the processing of certain information as described in this section and elsewhere in this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Information Used by AI Features</h3>
              <p className="text-body-color mb-3">
                When AI Features are enabled, Cluck may process certain personal information, including limited Health Information you have authorized us to access, to generate AI-assisted responses, summaries, insights, or guidance.
              </p>
              <p className="text-body-color mb-3">
                Key limitations apply:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Only the minimum information reasonably necessary to generate a response is processed.</li>
                <li>Certain sensitive data categories, including reproductive health information, are excluded by default unless you expressly opt in.</li>
                <li>AI Features rely on context you provide, data you authorize, and system-generated inferences.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Use of Third-Party AI Technology</h3>
              <p className="text-body-color mb-3">
                To provide AI Features, Cluck leverages third-party cloud infrastructure and artificial intelligence technology providers, including large language model providers ("AI Providers").
              </p>
              <p className="text-body-color mb-3">
                By using AI Features, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Information processed by AI Features may be transmitted to and processed by AI Providers solely to generate the requested functionality.</li>
                <li>Once transmitted, such information is subject to the technical, organizational, and security safeguards of those AI Providers.</li>
                <li>Cluck does not control the internal operations or model training practices of AI Providers.</li>
                <li>Cluck contractually restricts AI Providers from using data provided by Cluck to train their general models where commercially and technically feasible; however, Cluck does not guarantee how AI Providers internally process or store data beyond those contractual obligations.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Data Retention and Conversation History</h3>
              <p className="text-body-color mb-3">
                To support continuity and user experience:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Cluck may retain your AI interaction history so you can review prior exchanges and so AI Features can provide contextual responses over time.</li>
                <li>Certain underlying data used to generate AI responses (which may include personal or Health Information) may be temporarily retained for debugging, quality assurance, security, and compliance purposes, and is typically deleted within a limited period unless retention is required by law or legitimate business necessity.</li>
              </ul>
              <p className="text-body-color">
                You may request access to or deletion of retained AI interaction data by contacting legal@clucklabs.com, subject to applicable law and technical limitations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">No Medical Advice; No Reliance</h3>
              <p className="text-body-color mb-3">
                AI Features:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Do not provide medical advice, diagnoses, treatment recommendations, or clinical decision-making</li>
                <li>Are not a substitute for professional medical, healthcare, or fitness advice</li>
                <li>May generate outputs that are inaccurate, incomplete, outdated, inconsistent, or inappropriate</li>
              </ul>
              <p className="text-body-color mb-3">
                You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Any outputs generated by AI Features are informational only</li>
                <li>You assume all risk associated with reliance on AI-generated content</li>
                <li>You should always consult qualified professionals before making health, fitness, or wellness decisions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">User Responsibility and Risk Allocation</h3>
              <p className="text-body-color mb-3">
                You are solely responsible for:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>The information you choose to submit to AI Features</li>
                <li>How you interpret and use AI-generated outputs</li>
                <li>Any decisions, actions, or outcomes resulting from your use of AI Features</li>
              </ul>
              <p className="text-body-color">
                Cluck disclaims all liability arising from or related to your use of AI Features to the maximum extent permitted by law.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            We Do Not Sell Your Personal Information
          </h2>
          <p className="mb-4 text-body-color">
            Cluck does not sell your personal information and does not rent personal information to third parties for monetary consideration.
          </p>
          <p className="mb-4 text-body-color">
            We may, however, disclose personal information to service providers, partners, affiliates, or other third parties as described in this Privacy Policy and solely for legitimate business purposes, including operating, maintaining, improving, and securing the Services, or as otherwise permitted by applicable law.
          </p>
          <p className="text-body-color">
            Such disclosures do not constitute a "sale" of personal information under applicable U.S. state privacy laws. Where required by law, we also provide users with the ability to exercise opt-out rights related to certain data processing activities, as described elsewhere in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Third-Party Links and Websites
          </h2>
          <p className="mb-6 text-body-color">
            The Services may contain links to, integrations with, or content from third-party websites, applications, platforms, or services ("Third-Party Services").
          </p>
          <p className="mb-6 text-body-color">
            Cluck does not own, operate, control, or endorse any Third-Party Services and is not responsible for their availability, content, functionality, accuracy, security, or privacy practices.
          </p>
          <p className="mb-6 text-body-color">
            Your access to and use of Third-Party Services is entirely at your own risk and subject to the terms, conditions, and privacy policies of those Third-Party Services. Cluck expressly disclaims any liability arising from your interactions with or reliance on Third-Party Services.
          </p>
          <p className="mb-6 text-body-color">
            We encourage you to review the applicable terms and privacy policies of any Third-Party Services before engaging with them.
          </p>

          <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
            Our Content on Third-Party Services
          </h3>
          <p className="mb-4 text-body-color">
            Cluck content, features, or Services may be made available on, embedded within, or integrated with Third-Party Services, or Cluck may otherwise utilize Third-Party Services to host, distribute, promote, or remarket content.
          </p>
          <p className="mb-4 text-body-color">
            Cluck does not control how Third-Party Services collect, use, or disclose information once you interact with those platforms. Any information you provide or actions you take on Third-Party Services are governed by the applicable third party's privacy policy and terms—not this Privacy Policy.
          </p>
          <p className="mb-4 text-body-color">
            Third-Party Services may use cookies, pixels, mobile identifiers, or similar technologies to collect information about your activity across websites and applications for purposes such as analytics, advertising, or remarketing. Cluck is not responsible for such technologies or data practices.
          </p>
          <p className="text-body-color">
            Any use of Third-Party Services is undertaken at your own discretion and risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Your Choices
          </h2>
          <p className="mb-6 text-body-color">
            You have certain choices regarding how your personal information is collected, used, and disclosed. These choices are subject to technical feasibility, legal requirements, contractual obligations, and legitimate business needs.
          </p>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Accessing and Updating Personal Information</h3>
              <p className="text-body-color mb-3">
                You may review, update, or correct certain personal information associated with your account by:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Editing your profile directly through the Services (where available), or</li>
                <li>Contacting us at legal@clucklabs.com</li>
              </ul>
              <p className="text-body-color">
                We may retain historical or archived versions of information as reasonably necessary for legal, compliance, security, dispute resolution, auditing, or operational purposes, even after updates are made.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Account Deactivation and Data Retention</h3>
              <p className="text-body-color mb-3">
                You may request deactivation of your account by contacting legal@clucklabs.com. Account deactivation does not automatically result in deletion of all personal information.
              </p>
              <p className="text-body-color mb-3">
                We may retain certain information after account deactivation where retention is:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Required or permitted by law</li>
                <li>Necessary to enforce agreements</li>
                <li>Needed to resolve disputes or investigate misuse</li>
                <li>Required for security, fraud prevention, or system integrity</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">3. Marketing and Promotional Communications</h3>
              <p className="text-body-color mb-3">
                You may opt out of receiving promotional or marketing communications from us by following the unsubscribe instructions provided in those communications or by contacting legal@clucklabs.com.
              </p>
              <p className="text-body-color">
                Even if you opt out of marketing communications, we may continue to send non-promotional, transactional, or service-related communications, including account notices, policy updates, and security alerts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">4. Cluck Intelligence and AI Features</h3>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Use of AI-powered features, including Cluck Intelligence, is optional.</li>
                <li>You may choose whether or not to enable or interact with AI Features.</li>
                <li>If enabled, certain information you provide or authorize may be processed as described in this Privacy Policy.</li>
                <li>Disabling AI Features does not retroactively delete information previously processed, subject to retention limitations and applicable law.</li>
                <li>You acknowledge that disabling AI Features may limit certain functionality of the Services.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">5. Advertising and Interest-Based Ads</h3>
              <p className="text-body-color mb-3">
                Some advertising or analytics content may be delivered by third-party networks that use cookies, pixels, mobile identifiers, or similar technologies.
              </p>
              <p className="text-body-color mb-3">
                You may opt out of certain interest-based advertising by visiting:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>www.aboutads.info/choices (web browsers)</li>
                <li>www.aboutads.info/appchoices (mobile applications)</li>
              </ul>
              <p className="text-body-color">
                Opting out does not eliminate advertising entirely and does not prevent the collection of information for non-advertising purposes such as analytics or security.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">6. Tracking Technologies and Cookies</h3>
              <p className="text-body-color mb-3">
                Most web browsers accept cookies by default. You may configure your browser to remove or reject cookies; however, doing so may limit or prevent certain features of the Services from functioning properly.
              </p>
              <p className="text-body-color">
                On mobile devices, you may limit tracking through your device's privacy settings. The availability and effectiveness of such controls depend on your device and operating system.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">7. Location and Analytics Controls</h3>
              <p className="text-body-color mb-3">
                Where Third-Party Services provide controls to limit data collection (such as analytics or location-based services), you may exercise those controls directly through the applicable Third-Party Service or device settings.
              </p>
              <p className="text-body-color">
                Cluck does not guarantee that disabling such controls will eliminate all data collection, particularly where such collection is necessary to operate, secure, or maintain the Services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">8. Choosing Not to Provide Information</h3>
              <p className="text-body-color mb-3">
                You may choose not to provide certain personal information. However, doing so may result in limited access to features or the inability to use all or part of the Services.
              </p>
              <p className="text-body-color">
                Cluck is not responsible for any loss of functionality resulting from your decision not to provide information.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Information Security
          </h2>
          <p className="mb-6 text-body-color">
            Cluck implements commercially reasonable administrative, technical, and organizational safeguards designed to protect personal information from unauthorized access, use, alteration, or disclosure.
          </p>
          <p className="mb-6 text-body-color">
            These measures may include, without limitation, access controls, encryption in transit and at rest where appropriate, monitoring, and security reviews. However, no method of transmission over the Internet or electronic storage is completely secure, and Cluck does not guarantee absolute security.
          </p>
          <p className="mb-6 text-body-color">
            You acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 text-body-color space-y-3 mb-6">
            <li>You use the Services at your own risk</li>
            <li>Cluck is not responsible for unauthorized access caused by factors beyond its reasonable control, including but not limited to cyberattacks, system failures, third-party actions, or force majeure events</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials and for any activity occurring under your account</li>
            <li>To the maximum extent permitted by law, Cluck disclaims liability for any unauthorized access, loss, or disclosure of personal information not resulting from Cluck's willful misconduct.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            How Long We Keep Your Information
          </h2>
          <p className="mb-6 text-body-color">
            Cluck retains personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, including:
          </p>
          <ul className="list-disc pl-6 text-body-color space-y-2 mb-6">
            <li>Providing and maintaining the Services</li>
            <li>Complying with legal and regulatory obligations</li>
            <li>Enforcing agreements</li>
            <li>Resolving disputes</li>
            <li>Maintaining security and system integrity</li>
          </ul>
          <p className="mb-6 text-body-color">
            Retention periods may vary depending on the type of information, the context in which it was collected, and applicable legal requirements.
          </p>
          <p className="mb-6 text-body-color">
            Even after you discontinue use of the Services or request deletion, Cluck may retain certain information where retention is:
          </p>
          <ul className="list-disc pl-6 text-body-color space-y-2 mb-6">
            <li>Required or permitted by law</li>
            <li>Necessary for legitimate business purposes</li>
            <li>Required for fraud prevention, security, auditing, or compliance</li>
          </ul>
          <p className="text-body-color">
            Deletion requests are subject to technical limitations and legal obligations, and complete or immediate deletion cannot be guaranteed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Our Services Are Not Intended For Children
          </h2>
          <p className="mb-4 text-body-color">
            The Services are not intended for use by individuals under the age of eighteen (18).
          </p>
          <p className="mb-4 text-body-color">
            Cluck does not knowingly collect personal information from children. If we become aware that we have collected personal information from an individual under 18, we will take reasonable steps to delete such information in accordance with applicable law.
          </p>
          <p className="text-body-color">
            If you believe that a minor has provided personal information to Cluck, please contact us at legal@clucklabs.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            U.S. State-Specific Privacy Information
          </h2>
          <p className="mb-6 text-body-color">
            If you reside in certain U.S. states, including California, Colorado, Connecticut, Delaware, Iowa, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, and Virginia, you may be entitled to specific rights under applicable state privacy laws (collectively, "State Privacy Laws").
          </p>
          <p className="mb-6 text-body-color">
            This section describes those rights and how they apply to Cluck's data practices.
          </p>

          <div className="mb-6 space-y-6">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Categories of Personal Information Collected</h3>
              <p className="text-body-color mb-3">
                This Privacy Policy describes the categories of personal information we collect in the section titled "Personal Information We Collect," the sources of that information in "How We Collect Your Personal Information," and how we use and disclose such information in "How We Use Collected Information" and "To Whom We Share Your Personal Information."
              </p>
              <p className="text-body-color">
                Subject to applicable law, you may have the right to:
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Your State Privacy Rights</h3>
              
              <div className="space-y-4 mb-4">
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">1. Right to Know / Access</h4>
                  <p className="text-body-color">
                    Request confirmation of whether we process your personal information and obtain access to certain personal information we maintain about you.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">2. Right to Delete</h4>
                  <p className="text-body-color">
                    Request deletion of personal information we have collected from or about you, subject to statutory exceptions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">3. Right to Correct</h4>
                  <p className="text-body-color">
                    Request correction of inaccuracies in personal information we maintain about you.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">4. Right to Opt Out</h4>
                  <p className="text-body-color mb-2">
                    Opt out of certain processing activities, including:
                  </p>
                  <ul className="list-disc pl-6 text-body-color space-y-2">
                    <li>The sale of personal information (if applicable)</li>
                    <li>The sharing of personal information for targeted advertising</li>
                    <li>Profiling that produces legal or similarly significant effects</li>
                  </ul>
                  <p className="text-body-color mt-2">
                    Cluck does not sell personal information.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">5. Right to Appeal</h4>
                  <p className="text-body-color">
                    If we deny a request, you may have the right to appeal our decision in accordance with applicable State Privacy Laws.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Limitations and Exceptions</h3>
              <p className="text-body-color mb-3">
                Your rights under State Privacy Laws are not absolute. We may decline or limit a request where permitted by law, including where necessary to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Comply with legal obligations</li>
                <li>Complete transactions or provide requested Services</li>
                <li>Detect or prevent security incidents or fraud</li>
                <li>Protect the rights, safety, or property of Cluck or others</li>
                <li>Maintain internal records for compliance, auditing, or legal defense</li>
              </ul>
              <p className="text-body-color">
                We will respond to requests in accordance with applicable law and within required timeframes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Non-Discrimination</h3>
              <p className="text-body-color">
                You will not be discriminated against for exercising any rights afforded under applicable State Privacy Laws. However, certain features or functionality may be unavailable if the information at issue is required to provide the Services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">California-Specific Disclosures</h3>
              <p className="text-body-color mb-3">
                For the twelve (12) months preceding the effective date of this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>Cluck has not sold personal information.</li>
                <li>Cluck has disclosed personal information only as described in this Privacy Policy.</li>
                <li>California residents have the right to exercise their privacy rights without discrimination, consistent with California law.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">How to Exercise Your Rights</h3>
              <p className="text-body-color">
                Instructions for submitting requests are provided in the section titled "Exercising Your Rights (if applicable)."
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Exercising Your Rights (if applicable)
          </h2>
          <p className="mb-6 text-body-color">
            If you are entitled to privacy rights under applicable U.S. state privacy laws, you may submit a request to exercise those rights as described below.
          </p>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Submitting a Request</h3>
              <p className="text-body-color mb-3">
                To request access to, correction of, or deletion of personal information, or to exercise other rights available under applicable law, you may submit a request by:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Emailing us at legal@clucklabs.com</li>
              </ul>
              <p className="text-body-color">
                Requests must include sufficient information to allow us to reasonably verify your identity and understand the scope of your request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Identity Verification</h3>
              <p className="text-body-color mb-3">
                To protect your privacy and prevent unauthorized access or misuse, we may require you to verify your identity before processing a request. Verification may include confirming information we already have on file about you or your interactions with the Services.
              </p>
              <p className="text-body-color">
                Any information provided solely for identity verification purposes will be used only to verify your identity or authority to make the request and will not be retained or used for other purposes, except as required by law.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Authorized Agents</h3>
              <p className="text-body-color mb-3">
                Where permitted by law, you may designate an authorized agent to submit a request on your behalf. We may require:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Written proof that the agent is authorized to act on your behalf, and</li>
                <li>Independent verification of your identity directly with us</li>
              </ul>
              <p className="text-body-color">
                We reserve the right to deny requests from agents who cannot provide adequate authorization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Response Timing and Limitations</h3>
              <p className="text-body-color mb-3">
                We will respond to verified requests within the timeframes required by applicable law. Response times may be extended where permitted by law, including where requests are complex or numerous.
              </p>
              <p className="text-body-color mb-3">
                We may deny or partially fulfill requests where permitted by law, including where necessary to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Comply with legal or regulatory obligations</li>
                <li>Complete transactions or provide requested Services</li>
                <li>Maintain security, prevent fraud, or protect system integrity</li>
                <li>Preserve records required for legal claims, audits, or compliance</li>
              </ul>
              <p className="text-body-color">
                If we deny a request, we will provide an explanation where required by law and inform you of any available appeal rights.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Frequency of Requests</h3>
              <p className="text-body-color">
                Where permitted by law, we may limit the number of requests you may submit within a given time period. For example, certain jurisdictions permit honoring requests to know or access no more than twice within a twelve (12) month period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">No Fee; Exceptions</h3>
              <p className="text-body-color">
                We do not charge a fee to process verified requests unless permitted by law and the request is excessive, repetitive, or manifestly unfounded, in which case we may charge a reasonable fee or decline to act on the request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">California Shine the Light</h3>
              <p className="text-body-color mb-3">
                California's "Shine the Light" law permits California residents to request certain information regarding the disclosure of personal information to third parties for their own direct marketing purposes.
              </p>
              <p className="text-body-color mb-3">
                Cluck does not share personal information with third parties for their own direct marketing purposes as defined under California Civil Code Section 1798.83.
              </p>
              <p className="text-body-color">
                Accordingly, Cluck is not required to provide disclosures under the Shine the Light law. However, California residents may submit inquiries or requests regarding Cluck's privacy practices by contacting us at legal@clucklabs.com.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">"Do Not Track" Policy (CalOPPA)</h3>
              <p className="text-body-color mb-3">
                Certain web browsers offer a "Do Not Track" ("DNT") signal or similar mechanism to indicate your preference regarding online tracking.
              </p>
              <p className="text-body-color mb-3">
                At this time, the Services do not respond to DNT signals or similar mechanisms. This is because there is no uniform industry standard for interpreting DNT signals, and third-party technologies used by the Services may not recognize or honor such signals.
              </p>
              <p className="text-body-color">
                You may, however, control certain tracking activities through your browser or device settings, as described in the "Your Choices" section of this Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Information for European Economic Area Residents
          </h2>
          <p className="mb-6 text-body-color">
            If you are located in the European Economic Area ("EEA"), the United Kingdom, or Switzerland, this section applies to you. For purposes of applicable data protection laws, including the EU General Data Protection Regulation ("GDPR"), Cluck Labs, Inc. ("Cluck," "we," "us," or "our") is the data controller for personal information we process in connection with the Services, except where we act as a processor on behalf of another party (if applicable).
          </p>

          <div className="mb-6 space-y-6">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Lawful Bases for Processing</h3>
              <p className="text-body-color mb-3">
                We process personal information only where permitted by applicable law and based on one or more lawful bases, depending on the context and the type of information:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li><strong>Contractual Necessity:</strong> to provide the Services and perform our obligations under our Terms (e.g., account creation, providing requested features, maintaining your account).</li>
                <li><strong>Legitimate Interests:</strong> to operate, secure, maintain, improve, and protect the Services; prevent misuse; and support users, except where such interests are overridden by your rights and freedoms.</li>
                <li><strong>Consent:</strong> where you have given consent for specific processing activities (e.g., enabling optional integrations, permissions, or AI features).</li>
                <li><strong>Legal Obligation:</strong> to comply with applicable legal requirements, court orders, lawful requests, or regulatory obligations.</li>
                <li><strong>Vital Interests (rare):</strong> where necessary to protect someone's vital interests, to the extent recognized by applicable law.</li>
              </ul>
              <p className="text-body-color">
                Where we rely on consent, you may withdraw it at any time (see below). Withdrawal does not affect the lawfulness of processing before withdrawal and may limit or prevent access to certain features.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Your Rights</h3>
              <p className="text-body-color mb-3">
                Subject to applicable law, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li><strong>Right of Access:</strong> obtain confirmation of whether we process your personal information and request a copy of it.</li>
                <li><strong>Right to Rectification:</strong> request correction of inaccurate or incomplete personal information.</li>
                <li><strong>Right to Erasure ("Right to Be Forgotten"):</strong> request deletion of personal information in certain circumstances.</li>
                <li><strong>Right to Restrict Processing:</strong> request that we limit processing in certain circumstances.</li>
                <li><strong>Right to Data Portability:</strong> request a copy of certain personal information you provided to us in a structured, commonly used, machine-readable format, and request transmission to another controller where technically feasible.</li>
                <li><strong>Right to Object:</strong> object to processing based on legitimate interests and/or for direct marketing purposes.</li>
                <li><strong>Right to Withdraw Consent:</strong> withdraw consent where processing is based on consent.</li>
                <li><strong>Right Not to Be Subject to Certain Automated Decisions:</strong> where applicable, object to decisions based solely on automated processing that produce legal or similarly significant effects (note: Cluck generally does not perform such decision-making as a core function, but this right may apply depending on feature use and jurisdiction).</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">How to Exercise Your Rights</h3>
              <p className="text-body-color mb-3">
                You may submit a request by emailing us at legal@clucklabs.com.
              </p>
              <p className="text-body-color mb-3">
                To protect your privacy and prevent unauthorized access, we may require identity verification before fulfilling a request. We may also request additional information to understand and process your request.
              </p>
              <p className="text-body-color mb-3">
                We will respond within timeframes required by applicable law. We may deny or limit requests where permitted by law, including where necessary to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>comply with legal obligations,</li>
                <li>protect the rights, safety, and security of Cluck, our users, or others,</li>
                <li>maintain records required for compliance, auditing, or legal defense,</li>
                <li>complete transactions or provide the Services requested by you,</li>
                <li>detect or prevent security incidents, misuse, or fraud.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">International Data Transfers</h3>
              <p className="text-body-color mb-3">
                Cluck is based in the United States, and your personal information may be transferred to, stored, or processed in the United States and other jurisdictions where we or our service providers operate.
              </p>
              <p className="text-body-color mb-3">
                Where required under applicable law, we use appropriate safeguards for international transfers, which may include Standard Contractual Clauses ("SCCs") approved by the European Commission and/or other lawful mechanisms.
              </p>
              <p className="text-body-color mb-3">
                You acknowledge that jurisdictions outside the EEA may have data protection laws that differ from those in your country and that governmental authorities in those jurisdictions may have lawful access to personal information under certain circumstances.
              </p>
              <p className="text-body-color">
                You may request a copy of relevant transfer safeguards (such as SCCs) by contacting legal@clucklabs.com, subject to confidentiality and legal restrictions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Supervisory Authority Complaints</h3>
              <p className="text-body-color mb-3">
                If you are in the EEA, you have the right to lodge a complaint with a data protection supervisory authority, including in the EEA country where you live, work, or where you believe an infringement occurred.
              </p>
              <p className="text-body-color mb-3">
                For a list of EEA supervisory authorities and contact details, see:<br />
                https://www.edpb.europa.eu/about-edpb/about-edpb/members_en
              </p>
              <p className="text-body-color mb-3">
                If you are in the UK, you may lodge a complaint with the Information Commissioner's Office (ICO).
              </p>
              <p className="text-body-color">
                If you are in Switzerland, you may lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Usage and Deletion of Personal Information</h3>
              <p className="text-body-color mb-3">
                You may request information about the personal information we have collected about you, including (where required by applicable law) the categories of personal information, the purposes for which it is used, and the categories of recipients to whom it is disclosed.
              </p>
              <p className="text-body-color">
                You may also request deletion of certain personal information. Requests must be submitted by emailing legal@clucklabs.com and are subject to identity verification as described in this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white mb-3">Important Limitations</h3>
              <p className="text-body-color mb-3">
                Deletion requests are subject to legal and operational limitations. We may retain personal information, and may deny or partially fulfill deletion requests, where permitted or required by law, including where the information is necessary to:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2 mb-3">
                <li>Provide the Services you requested, complete a transaction, or maintain your account</li>
                <li>Detect, prevent, investigate, or address security incidents, misuse, unauthorized access, or unlawful activity</li>
                <li>Protect the rights, property, and safety of Cluck, our users, and others</li>
                <li>Debug, repair, and improve the Services, including to identify and resolve errors</li>
                <li>Comply with legal obligations, respond to lawful requests, or maintain records required by applicable law</li>
                <li>Establish, exercise, or defend legal claims, enforce our agreements, or resolve disputes</li>
                <li>Maintain backups, archives, or logs for a limited period consistent with security and business continuity practices</li>
              </ul>
              <p className="text-body-color mb-3">
                You acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-body-color space-y-2">
                <li>We cannot guarantee immediate or complete deletion in all circumstances.</li>
                <li>Certain information may persist in backups or archival systems for a limited period after deletion, consistent with our retention practices.</li>
                <li>If we delete personal information required to provide certain features, your access to those features (or the Services) may be limited or unavailable.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Changes to this Privacy Policy
          </h2>
          <p className="mb-4 text-body-color">
            We may update this Privacy Policy from time to time in our sole discretion. When we make changes, we will update the "Last Updated" date at the top of this Privacy Policy.
          </p>
          <p className="mb-4 text-body-color">
            Subject to applicable law, your continued access to or use of the Services after an update becomes effective constitutes your acceptance of the revised Privacy Policy.
          </p>
          <p className="text-body-color">
            If required by applicable law, we will provide additional notice of material changes through the Services or by other reasonable means. It is your responsibility to review this Privacy Policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            You Can Contact Us
          </h2>
          <p className="mb-4 text-body-color">
            If you have questions, comments, or requests regarding this Privacy Policy or our privacy practices, you may contact us at:
          </p>
          <div className="text-body-color space-y-2">
            <p className="font-semibold">Cluck Labs, Inc. (a Delaware corporation)</p>
            <p>
              Mailing Address: 9100 Wilshire Blvd, Ste 333 #232, Beverly Hills, CA 90212, USA
            </p>
            <p>
              Email: <a href="mailto:legal@clucklabs.com" className="text-blue-600 dark:text-blue-400 hover:underline">legal@clucklabs.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
