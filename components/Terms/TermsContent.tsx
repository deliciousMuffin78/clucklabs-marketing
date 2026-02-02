"use client";

interface TermsContentProps {
  showTitle?: boolean;
  className?: string;
}

export default function TermsContent({ showTitle = true, className = "" }: TermsContentProps) {
  return (
    <div className={`container mx-auto max-w-4xl px-4 ${className}`}>
      {showTitle && (
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          Terms of Service
        </h1>
      )}
      
      <p className="mb-4 text-body-color">Last Updated: January 30, 2026</p>

      <div className="prose dark:prose-invert max-w-none text-body-color space-y-6">
        <p>
          Welcome, and thanks for your interest in Cluck. These Terms of Service (this "Agreement" or "Terms") govern your access to and use of: (i) our website located at https://clucklabs.com (the "Site"); (ii) our mobile application(s) (the "Mobile App"); and (iii) any related services, features, content, tools, communications, integrations, and functionality offered through the Site or Mobile App (collectively, the "Services"). The Services are owned and operated by Cluck Labs, Inc. and its affiliates and subsidiaries (collectively, the "Company," "Cluck," "we," "us," or "our").
        </p>

        <p className="font-semibold">
          IMPORTANT NOTICE - PLEASE READ CAREFULLY. This Agreement contains provisions that limit our liability, require arbitration on an individual basis, waive the right to a jury trial, and waive participation in class or representative actions. By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not agree, you must not access or use the Services and must discontinue use immediately.
        </p>

        <p>
          This Agreement is a legally binding contract between you and the Company. You accept this Agreement by: (a) creating an account; (b) clicking or tapping an "I Agree," "Accept," or similar button; (c) downloading, installing, or using the Mobile App; (d) accessing or using any part of the Services; or (e) otherwise indicating assent to these Terms. If you are using the Services on behalf of an entity, you represent and warrant that you have authority to bind that entity, and "you" includes both you and that entity.
        </p>

        <p className="font-semibold">
          THE SERVICES ARE NOT MEDICAL OR EMERGENCY SERVICES. The Services may provide general information, insights, recommendations, scoring, plans, prompts, or other outputs related to health, fitness, wellness, activity, nutrition, recovery, sleep, or lifestyle. THE SERVICES DO NOT PROVIDE MEDICAL ADVICE AND ARE NOT A SUBSTITUTE FOR PROFESSIONAL CARE. You are solely responsible for your decisions and actions, including whether to seek professional advice, whether to follow any plan or suggestion, and whether to engage in any physical activity. IF YOU THINK YOU MAY HAVE A MEDICAL EMERGENCY, CALL 911 (OR YOUR LOCAL EMERGENCY NUMBER) IMMEDIATELY.
        </p>

        <p className="font-semibold">
          ASSUMPTION OF RISK. Your access to and use of the Services (including any workouts, activities, challenges, events, recommendations, or content) is voluntary and at your sole risk. You acknowledge that physical activity and changes to diet, sleep, or behavior carry inherent risks, and you assume all risks of injury, illness, harm, or damages, whether known or unknown, foreseeable or unforeseeable, arising from or related to your use of the Services.
        </p>

        <p className="font-semibold">
          ARBITRATION / CLASS ACTION WAIVER / JURY WAIVER NOTICE. These Terms contain a binding arbitration agreement and class action waiver in Section 25. PLEASE REVIEW SECTION 25 CAREFULLY BEFORE USING THE SERVICES.
        </p>

        <p>
          We may modify, update, or replace these Terms at any time in our sole discretion. We will post the updated Terms on the Site (and may also provide notice through the Services, by email, or through other reasonable means). Your continued access to or use of the Services after updated Terms become effective constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Services.
        </p>

        <p>
          We may, at any time and without liability, change, suspend, restrict, or discontinue any portion of the Services, including features, content, integrations, or availability, and we may impose or change rules and limits on use. The Services may be interrupted, delayed, or unavailable for any reason, including maintenance, system failures, third-party issues, or events outside our control.
        </p>

        <p>
          You agree that we may communicate with you electronically regarding your account and your use of the Services, including through in-app messages, the Site, email, SMS/text (where permitted), push notifications, or other electronic means. You consent to receive such communications, and you agree that electronic communications satisfy any legal requirement that such communications be in writing.
        </p>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            1. Platform Services
          </h2>
          
          <p className="mb-4">
            The Services provide a digital platform that may include, without limitation: (a) collecting, syncing, importing, or otherwise receiving data you choose to provide (including manual entries) and data you authorize us to access from connected devices, applications, services, or accounts such as Apple Health, wearable devices, and other third-party providers (collectively, "Third-Party Sources"); (b) organizing, displaying, and providing tools to review such data; (c) generating general scores, trends, insights, educational information, recommendations, plans, prompts, alerts, reminders, and other outputs (including outputs generated using automated systems, artificial intelligence, or machine learning) based on your inputs and/or Third-Party Source data; and (d) enabling optional community, social, coaching, challenges, events, communications, and related features, as we may offer from time to time (collectively, the "Platform Services").
          </p>

          <p className="mb-4">
            You understand and agree that: (i) you control whether to connect Third-Party Sources and what data you choose to provide; (ii) Third-Party Sources are independent from us and are governed by their own terms, privacy policies, permissions, fees, and availability; and (iii) we do not control, endorse, sponsor, or assume responsibility for Third-Party Sources, including their data accuracy, completeness, timeliness, security, reliability, or continued availability. Third-Party Sources may change, suspend, restrict, or discontinue access at any time, and your access to certain Platform Services may be interrupted, degraded, or unavailable as a result.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Authorization and Permissions.</span> By connecting any Third-Party Source, you represent and warrant that you have the right and authority to grant us access to such data and to direct the Third-Party Source to provide it to us. You authorize us to access, receive, and process Third-Party Source data as necessary to provide the Services, subject to our Privacy Policy and your device/account settings. You may revoke permissions at any time through the relevant Third-Party Source or your device settings; however, revocation may prevent you from accessing certain features and may not delete data previously received and processed in accordance with our Privacy Policy and these Terms.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No Guarantee; Changes to Services.</span> The Platform Services are provided for informational and convenience purposes only and may be modified, updated, expanded, reduced, suspended, or discontinued at any time, with or without notice, in our sole discretion. We do not guarantee that any Platform Services (including any scores, recommendations, plans, reminders, alerts, or other outputs) will be accurate, complete, reliable, current, personalized, suitable, safe, or effective for you, or that the Services will be available, uninterrupted, or error-free.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Not Healthcare; HIPAA.</span> Unless we expressly agree otherwise in writing, the Company is not acting as your healthcare provider and the Services are not healthcare services. Nothing in the Services creates any doctor–patient, therapist–patient, trainer–client, fiduciary, or other professional relationship between you and the Company. Unless expressly agreed in writing, you acknowledge that the Company is not acting as a "covered entity" or "business associate" (as those terms are defined under the U.S. Health Insurance Portability and Accountability Act of 1996, as amended, and its implementing regulations, "HIPAA") solely by providing the Services, and you agree not to submit information to the Services that you are prohibited from sharing.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            2. Acknowledgement and Disclaimers
          </h2>
          
          <p className="mb-4">
            By accessing or using the Services, you acknowledge, represent, warrant, and agree to all of the following:
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-semibold mb-2">INFORMATIONAL PURPOSES ONLY; NOT MEDICAL ADVICE.</p>
              <p>
                The Services (including any content, communications, scores, trends, analyses, recommendations, plans, prompts, alerts, reminders, coaching-style guidance, or other outputs) are provided for general health, fitness, wellness, educational, and informational purposes only. THE SERVICES DO NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT and are not a substitute for professional medical advice, diagnosis, treatment, physical therapy, mental health care, counseling, nutrition or dietetic services, or other professional services. We do not practice medicine, physical therapy, psychotherapy, counseling, or any licensed profession, and we do not prescribe medications, therapies, or treatment plans. Any reliance on the Services is at your sole risk.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">NO PROVIDER–PATIENT OR OTHER PROFESSIONAL RELATIONSHIP.</p>
              <p>
                Your use of the Services, and any communications with the Company or through the Services (including via chat, email, push notifications, or any automated or AI-enabled features), does not create a doctor–patient, therapist–patient, trainer–client, coach–client, fiduciary, or other healthcare or professional relationship between you and the Company. The Company is not responsible for any decisions you make based on the Services, and you are solely responsible for your health and well-being, including seeking appropriate professional care.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">CONSULT A QUALIFIED PROFESSIONAL; DO NOT DELAY CARE.</p>
              <p>
                You should consult a physician or other qualified healthcare professional before starting, changing, or stopping any exercise, training, sleep, recovery, nutrition, supplementation, medication, or lifestyle program, and whenever you have questions regarding a medical condition or symptoms. You must not disregard, avoid, delay, or discontinue professional medical advice because of information or outputs provided through the Services. If you have, suspect, or experience any medical condition, injury, pain, dizziness, shortness of breath, fainting, abnormal heart symptoms, unusual fatigue, or any other concerning symptom, stop the applicable activity and seek professional medical attention immediately.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">NO GUARANTEES; USER RESPONSIBILITY; INDIVIDUAL VARIATION.</p>
              <p>
                The Services may use data you provide and data obtained from Third-Party Sources to generate estimates, inferences, or generalized guidance. We do not guarantee the accuracy, completeness, timeliness, legality, safety, suitability, or usefulness of any information or output, including any score, trend, recommendation, plan, or reminder. Human physiology and responses vary widely; outputs may be misleading, incomplete, or inappropriate for you, particularly if you have medical conditions, disabilities, injuries, are pregnant, are immunocompromised, are under medical supervision, or differ from population averages. You are solely responsible for (a) verifying information before relying on it; (b) knowing your limits; (c) choosing whether and how to act; and (d) using appropriate judgment and safety precautions. You assume all risks arising from your use of the Services and any actions you take (or do not take) based on the Services.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">EMERGENCIES.</p>
              <p>
                IF YOU THINK YOU MAY HAVE A MEDICAL EMERGENCY, CALL 911 (OR YOUR LOCAL EMERGENCY NUMBER) IMMEDIATELY. DO NOT RELY ON THE SERVICES FOR EMERGENCY ASSISTANCE.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            3. General
          </h2>
          
          <p className="mb-4">
            Subject to this Agreement, you are solely responsible for your access to and use of the Services and for all activities that occur under your account (whether or not authorized by you). You are also solely responsible for any information, data, text, messages, images, audio, video, files, materials, and other content that you submit, post, transmit, or otherwise make available through the Services (collectively, "Content"), and for all consequences of doing so.
          </p>

          <p className="mb-4">
            You agree that you will use the Services only for their intended purposes and in compliance with this Agreement and all applicable laws. You understand and agree that your use of the Services is at your sole risk, and that the Company is not responsible for any decisions you make or actions you take based on the Services or any Content (including Third-Party Source data or outputs generated by the Services).
          </p>

          <p className="mb-4">
            <span className="font-semibold">No Confidentiality.</span> Except as expressly stated in our Privacy Policy, you agree that any feedback, suggestions, ideas, or non-personal information you provide to the Company is provided non-confidential and that the Company may use it without restriction or obligation.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Monitoring; Enforcement.</span> To the maximum extent permitted by law, we reserve the right (but have no obligation) to monitor, review, remove, restrict, or disable access to any Content or use of the Services at any time and for any reason, including if we believe it violates this Agreement or may create risk or liability for the Company or others. We may cooperate with law enforcement, regulators, or court orders as required.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            4. Privacy
          </h2>
          
          <p className="mb-4">
            By accessing or using the Services, you acknowledge and agree that you have reviewed and accepted our Privacy Policy located at{" "}
            <a href="/privacy" className="text-primary hover:underline">
              https://clucklabs.com/privacy
            </a>{" "}
            (the "Privacy Policy"), which is incorporated into this Agreement by reference. If you do not agree to the Privacy Policy, you may not access or use the Services.
          </p>

          <p className="mb-4">
            You understand and agree that the Company may collect, use, share, store, process, and otherwise handle your information (including data you provide, data imported from Third-Party Sources, device data, and usage data) in accordance with the Privacy Policy and applicable law. You further understand and agree that: (a) the Services may include Third-Party Sources and third-party service providers that we use to operate the Services; (b) Third-Party Sources are governed by their own terms and privacy practices; and (c) we do not control third-party practices and are not responsible for third-party acts or omissions.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Security Disclaimer.</span> While we take reasonable measures designed to protect information, no method of transmission or storage is 100% secure, and we do not guarantee the absolute security of any information. You are responsible for maintaining the confidentiality of your credentials and for using appropriate security precautions on your devices and accounts.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            5. Accounts
          </h2>
          
          <p className="mb-4">
            Certain features of the Services require you to create an account. If you create or use an account, you agree that:
          </p>

          <p className="mb-4">
            <span className="font-semibold">Accurate Information.</span> You will provide complete, current, and accurate information and will promptly update it as necessary. You represent and warrant that you have the legal right and authority to create the account and to provide all information you submit (including any Third-Party Source permissions you grant).
          </p>

          <p className="mb-4">
            <span className="font-semibold">Account Security.</span> You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account, whether authorized by you or not. You agree to notify us immediately if you suspect unauthorized access, compromise or compromise of your account or credentials. We are not liable for any loss or damage arising from your failure to safeguard your account, your device, or your credentials.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Account Use; One Account; No Sharing.</span> Unless expressly permitted by the Company in writing, you may not sell, transfer, sublicense, or share your account, and you may not permit any third party to access or use your account. We may require additional verification steps to access certain features or to confirm account ownership.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Communications.</span> By creating an account or otherwise providing contact information, you consent to receive communications from us relating to the Services, your account, and these Terms (including transactional, operational, legal, and security communications) by electronic means, including email, in-app messages, push notifications, and other channels permitted by law. You may opt out of certain non-transactional promotional communications as described in the Privacy Policy, but you cannot opt out of transactional or legally required communications.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Account Suspension/Termination.</span> We may suspend, restrict, or terminate your account (and/or your access to any part of the Services) at any time, with or without notice, and with or without cause, in our sole discretion, including if we believe: (a) you violated this Agreement; (b) your use creates risk for the Company or any third party; (c) your account has been compromised; or (d) we are required to do so by law, regulation, or at the request of a governmental authority. Upon termination, you remain responsible for all obligations incurred prior to termination and for any provisions of this Agreement that by their nature should survive.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            6. Eligibility
          </h2>
          
          <p className="mb-4">
            The Services are intended only for users who are able to form a legally binding contract and who meet the eligibility requirements in this Section. By accessing or using the Services, you represent and warrant that you:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Are at least eighteen (18) years old (or the age of majority where you live, whichever is higher) and have the legal capacity to enter into this Agreement;</li>
            <li>Are not prohibited by law from using the Services;</li>
            <li>Are not located in a country or region subject to U.S. embargo or other applicable restrictions;</li>
            <li>Are not listed on any U.S. government list of prohibited or restricted parties (or any similar list under applicable law); and</li>
            <li>Have not previously been suspended or removed from the Services, unless we have provided you express written permission to use the Services again.</li>
          </ul>

          <p className="mb-4">
            <span className="font-semibold">No use by minors.</span> The Services are not directed to children, and we do not knowingly permit anyone under 18 to create an account or use the Services. If we learn that an account is associated with a person under 18, we may suspend or terminate that account and delete associated data, subject to our Privacy Policy and applicable law.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Authorized Users (if applicable).</span> If we offer features that allow you to provide access to the Services to other individuals under a plan, subscription, organization, team, or similar arrangement (each, an "Authorized User"), then: (a) you are responsible for ensuring each Authorized User meets these eligibility requirements and complies with this Agreement; (b) you are responsible for all activities occurring under your account and by your Authorized Users; and (c) any obligations imposed on you under this Agreement also apply to your Authorized Users. We may require verification, impose limits, or revoke Authorized User access at any time in our sole discretion.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Verification; Enforcement.</span> We may (but are not required to) verify your eligibility at any time. If you do not meet the requirements of this Section or if we cannot reasonably verify them, we may suspend or terminate your access to the Services without notice and without liability to you.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            7. Content
          </h2>
          
          <p className="mb-4">
            The Services may allow you (and, if applicable, your Authorized Users) to submit, upload, store, publish, transmit, or otherwise make available text, messages, photos, videos, audio, documents, links, workout notes, comments, profile information, and other materials (collectively, "User Content"). For clarity, User Content does not include the Services themselves or Company Content (as defined elsewhere in these Terms).
          </p>

          <p className="mb-4">
            You are solely responsible for User Content. You represent and warrant that: (a) you own or have all necessary rights, licenses, consents, permissions, and authority to submit and use your User Content as contemplated by the Services and this Agreement; (b) your User Content is accurate to the best of your knowledge (where it purports to be factual); and (c) your User Content and its submission, publication, display, and use through the Services does not violate any law or infringe, misappropriate, or otherwise violate any third-party rights (including intellectual property, privacy, publicity, or contractual rights).
          </p>

          <p className="mb-4">
            <span className="font-semibold">License you grant to the Company.</span> To the maximum extent permitted by law, you grant the Company a non-exclusive, worldwide, royalty-free, fully paid, transferable, sublicensable, and perpetual (and, where permitted, irrevocable) license to host, store, cache, use, reproduce, modify (for formatting, technical processing, and compatibility), create derivative works of, distribute, publicly display, publicly perform, and otherwise exploit your User Content solely to: (i) operate, provide, maintain, improve, secure, troubleshoot, and develop the Services (including AI/automated processing, content moderation, and safety); (ii) display your User Content as you direct through the Services (including sharing with other users based on your settings); (iii) enforce this Agreement, comply with law, and protect the rights, safety, and integrity of the Company, users, and third parties; and (iv) create aggregated and/or de-identified data and analytics (which are not User Content and may be used for any lawful purpose).
          </p>

          <p className="mb-4">
            You acknowledge that technical processing and transmission of User Content (including through third-party hosting or networks) may be required to provide the Services, and you authorize us to do so.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Public and shared features.</span> If you submit User Content to areas of the Services that are public, shared, discoverable, or visible to other users (for example, a community feed, comments, challenges, leaderboards, event pages, or profile features), you acknowledge that other users may view, share, comment on, or interact with that User Content consistent with the functionality of the Services and your settings. We do not control what other users do with content you choose to make public or shared.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No compensation; no confidentiality.</span> You understand that you will not receive compensation for any use of your User Content under these Terms. Except as required by applicable law or expressly stated in our Privacy Policy, we do not guarantee confidentiality for User Content you submit to the Services.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Moral rights waiver.</span> To the maximum extent permitted by law, you waive (and agree not to assert) any "moral rights" or similar rights you may have in your User Content, and you agree to provide any additional consents reasonably requested by us to allow us to use your User Content as described above.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Content rules.</span> You agree that you (and your Authorized Users) will not submit, post, transmit, or otherwise make available User Content that:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Is unlawful, fraudulent, defamatory, or misleading;</li>
            <li>Is obscene, pornographic, sexually explicit, excessively violent, or otherwise harmful;</li>
            <li>Harasses, threatens, or promotes hatred or discrimination against any person or group;</li>
            <li>Infringes, misappropriates, or violates any intellectual property, privacy, publicity, or other rights of any person or entity;</li>
            <li>Contains another person's private or confidential information without lawful authority and consent;</li>
            <li>Contains malware, spyware, or other harmful code;</li>
            <li>Constitutes spam, manipulative engagement, or unsolicited commercial content; or</li>
            <li>Violates this Agreement, the rules of any Third-Party Source, or any applicable platform rules (including the Apple App Store rules applicable to your use of the Mobile App).</li>
          </ul>

          <p className="mb-4">
            <span className="font-semibold">Moderation and removal.</span> We may (but have no obligation to) monitor, review, screen, remove, edit, block, restrict, or delete any User Content at any time and for any reason, including if we believe it violates this Agreement, could harm the Company or users, or could create legal risk. We may also suspend or terminate accounts associated with prohibited User Content. We are not responsible for any failure or delay in removing such content.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No storage guarantee.</span> We do not guarantee that User Content will be available, backed up, or retained. You are responsible for maintaining your own backups. We may delete User Content at any time in connection with enforcement, product changes, legal compliance, or account termination, subject to our Privacy Policy and applicable law.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Apple alignment (clarification).</span> Apple is not a party to this Agreement and does not assume responsibility for User Content. This Section is intended to govern rights and responsibilities between you and the Company only.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            8. Your Interactions with Other Users
          </h2>
          
          <p className="mb-4">
            The Services may allow you to interact with other users, clubs, coaches, trainers, creators, brands, or other third parties (collectively, "Other Users") through features such as profiles, messaging, comments, communities, clubs, events, challenges, leaderboards, or other social functionality. YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR INTERACTIONS WITH OTHER USERS, INCLUDING ANY COMMUNICATIONS, MEETUPS, TRAINING, EVENTS, CHALLENGES, PURCHASES, OR TRANSACTIONS YOU CHOOSE TO PARTICIPATE IN OR FACILITATE THROUGH THE SERVICES.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No screening; no verification.</span> To the maximum extent permitted by law, the Company does not and is not obligated to conduct background checks, identity verification, credential verification, licensing verification, or screening of Other Users, and the Company does not guarantee the truthfulness, accuracy, completeness, safety, quality, legality, or suitability of any statements, content, advice, services, offers, or conduct of Other Users. Any references to "coach," "trainer," "pro," "expert," "verified," "club," or similar descriptors (if offered) may be for informational or user-selected categorization purposes only and do not constitute endorsement, certification, or guarantee by the Company.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Assumption of risk; precautions.</span> You agree to take all reasonable precautions in all interactions with Other Users, including meeting in public places, verifying identity and credentials independently, using appropriate safety measures, and consulting professionals as needed. You assume all risks arising out of or relating to interactions with Other Users, including physical injury, illness, property damage, harassment, fraud, theft, or other harm.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Release.</span> To the maximum extent permitted by law, you hereby release and forever discharge the Company and its officers, directors, employees, agents, affiliates, and licensors from any and all claims, demands, damages, losses, liabilities, costs, and expenses (including attorneys' fees) arising out of or related to your interactions with Other Users, including disputes, communications, meetups, training, events, challenges, transactions, or any resulting injury or harm.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Company involvement; no obligation.</span> The Company may (but is not required to) provide tools to report, block, or flag Other Users or content, and may (but is not required to) review reports and take action in its sole discretion. The Company is not responsible for resolving disputes between you and Other Users. You agree that any dispute between you and any Other User is solely between you and that Other User.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            9. Compliance with Laws
          </h2>
          
          <p className="mb-4">
            You agree to access and use the Services only for lawful purposes and in compliance with this Agreement and all applicable laws, rules, and regulations. Without limitation, you agree that you will not use the Services to:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>engage in any illegal, deceptive, fraudulent, or harmful activity;</li>
            <li>violate the rights of any person or entity (including privacy, publicity, intellectual property, or contractual rights);</li>
            <li>violate any applicable health, safety, or consumer protection laws;</li>
            <li>violate any payment, tax, anti-money laundering, sanctions, export control, or counterterrorism laws (to the extent applicable); or</li>
            <li>solicit, promote, or facilitate unlawful conduct.</li>
          </ul>

          <p className="mb-4">
            You are solely responsible for determining what laws apply to your use of the Services and for complying with them. We may take any action we deem appropriate, in our sole discretion, to comply with applicable laws, regulations, legal process, or governmental requests, including suspending or terminating accounts, removing content, or restricting features.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            10. Fees
          </h2>
          
          <p className="mb-4">
            Certain features of the Services may be offered for free, and other features may require payment of fees, including subscriptions, event fees, challenge fees, digital goods, or other charges (collectively, "Fees"). You agree to pay all applicable Fees, taxes, and other charges incurred through your account or through your use of the Services, in accordance with the pricing and billing terms presented to you at the time of purchase.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Pricing changes; no refunds unless required by law.</span> To the maximum extent permitted by law, we may change our prices, Fees, or billing structures at any time, including introducing new fees or changing existing fees, in our sole discretion. We will provide notice where required by applicable law. All Fees are non-refundable except to the extent required by applicable law or expressly stated by us in writing at the time of purchase.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Third-party payment processors and marketplaces.</span> Payments may be processed through third-party payment processors, app marketplaces (such as the Apple App Store), or other third-party services. Your purchases may be subject to the terms and policies of those third parties, and you agree to comply with them. We are not responsible for errors or actions of third-party payment processors or marketplaces.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Promotions; credits.</span> We may offer trials, discounts, promotional pricing, or credits from time to time, subject to additional terms disclosed at the time of the offer. Promotions have no cash value, may be modified or revoked at any time, and may be subject to eligibility requirements, expiration dates, and other restrictions, unless prohibited by law.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Non-payment; collections.</span> If payment cannot be charged to your selected payment method, if a charge is reversed, or if you initiate a chargeback, we may suspend or terminate your access to paid features immediately and may pursue any lawful remedies to collect amounts owed.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            11. Subscriptions; In-App Purchases; App Store Terms
          </h2>
          
          <p className="mb-4">
            The Company may offer paid subscriptions or other paid features through the Mobile App and/or the Site, including purchases made through the Apple App Store or other third-party platforms (each, an "External Service", and each purchase made through an External Service, an "External Service Purchase"). If you make an External Service Purchase, the External Service—not the Company—processes payment and billing for that purchase, and your purchase is also subject to the External Service's applicable terms, conditions, and policies.
          </p>

          <p className="mb-4">
            <span className="font-semibold">A. Auto-Renewing Subscriptions (External Service Purchases).</span> If you purchase an auto-renewing subscription through an External Service, then unless you cancel, your subscription will automatically renew and your External Service account (e.g., your Apple ID account) will be charged the subscription price plus applicable taxes and fees at the frequency and terms disclosed to you at the time of purchase.
          </p>

          <p className="mb-4">
            <span className="font-semibold">B. How to Cancel; Effect of Cancellation.</span> You may cancel an auto-renewing subscription at any time through the External Service (for example, through your Apple ID subscription settings). Deleting your account with the Company or deleting the Mobile App does not cancel your subscription. If you cancel, you will generally continue to have access to subscription benefits until the end of the then-current subscription period, after which your subscription will expire and will not renew unless you re-subscribe.
          </p>

          <p className="mb-4">
            <span className="font-semibold">C. Refunds.</span> Except where required by applicable law, all Fees are non-refundable. If you purchased through an External Service, refund requests are handled by that External Service under its refund policies (for example, Apple's refund rules). The Company does not have the ability to issue refunds for External Service Purchases unless the External Service authorizes it.
          </p>

          <p className="mb-4">
            <span className="font-semibold">D. Trials, Introductory Offers, and Promotions.</span> We (or an External Service) may offer free trials, introductory pricing, or promotional offers. Unless you cancel before the end of the applicable trial or promotional period, your subscription will automatically renew and you will be charged the then-applicable subscription price plus any applicable taxes/fees at the frequency disclosed at signup.
          </p>

          <p className="mb-4">
            <span className="font-semibold">E. Price Changes.</span> We may change subscription pricing or offerings at any time in our sole discretion. For External Service Purchases, price changes are administered by the External Service and may require your confirmation or may be subject to advance notice and consent requirements imposed by applicable law and/or the External Service's rules. For purchases made directly through the Company (if offered), we will provide notice where required by law.
          </p>

          <p className="mb-4">
            <span className="font-semibold">F. Chargebacks; Fraud; Non-Payment.</span> If you initiate a chargeback, reverse a payment, or if payment cannot be processed for any reason, we may suspend or terminate access to paid features immediately and may pursue any lawful remedies.
          </p>

          <p className="mb-4">
            <span className="font-semibold">G. Apple App Store Additional Terms (Required Notice).</span> If you downloaded the Mobile App from the Apple App Store, you acknowledge and agree that:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>This Agreement is between you and the Company, not Apple. Apple is not a party to this Agreement and does not own or operate the Services.</li>
            <li><span className="font-semibold">License Scope.</span> Your right to use the Mobile App is limited to a non-transferable license to use the Mobile App on Apple-branded products that you own or control and as permitted by the Apple Media Services Terms and Conditions and the App Store rules.</li>
            <li><span className="font-semibold">Maintenance and Support.</span> The Company—not Apple—is solely responsible for providing any maintenance and support services with respect to the Mobile App, as required under applicable law.</li>
            <li><span className="font-semibold">Warranties.</span> To the extent any warranty exists under applicable law that cannot be disclaimed, Apple will have no responsibility for such warranty, and any claims, losses, liabilities, damages, costs, or expenses attributable to any failure of the Mobile App to conform to any applicable warranty are the Company's responsibility as set forth in these Terms.</li>
            <li><span className="font-semibold">Product Claims.</span> The Company—not Apple—is responsible for addressing any claims by you or any third party relating to the Mobile App or your possession and/or use of the Mobile App, including (a) product liability claims; (b) claims that the Mobile App fails to conform to any applicable legal or regulatory requirement; and (c) claims arising under consumer protection, privacy, or similar laws.</li>
            <li><span className="font-semibold">Intellectual Property Claims.</span> In the event of any third-party claim that the Mobile App or your possession and use of the Mobile App infringes that third party's intellectual property rights, the Company—not Apple—will be solely responsible for the investigation, defense, settlement, and discharge of any such claim, as required by these Terms.</li>
            <li><span className="font-semibold">Legal Compliance.</span> You represent and warrant that (a) you are not located in a country subject to a U.S. government embargo or designated as a "terrorist supporting" country; and (b) you are not listed on any U.S. government list of prohibited or restricted parties.</li>
            <li><span className="font-semibold">Third-Party Beneficiary.</span> Apple and Apple's subsidiaries are third-party beneficiaries of this Agreement as it relates to your use of the Mobile App, and Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary.</li>
          </ul>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            12. Your License to the Services
          </h2>
          
          <p className="mb-4">
            Subject to your compliance with this Agreement (and payment of any applicable Fees), the Company grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Services (including the Mobile App) solely for your lawful, internal, non-commercial use and only as expressly permitted by this Agreement. All rights not expressly granted to you are reserved by the Company and its licensors.
          </p>

          <p className="mb-4">
            <span className="font-semibold">License Conditions; No Ownership.</span> The Services are licensed, not sold. Nothing in this Agreement transfers to you any ownership interest in or to the Services, the Company Content, or any intellectual property. You agree that you will not use the Services except as expressly authorized by the Company under this Agreement.
          </p>

          <p className="mb-4">
            <span className="font-semibold">App Store / Apple Requirements.</span> If you downloaded the Mobile App from the Apple App Store, then your use of the Mobile App is also subject to the Apple Media Services Terms and Conditions and applicable App Store rules. Without limiting the generality of the foregoing, you may use the Mobile App only on Apple-branded products that you own or control, and only as permitted by applicable usage rules.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Third-Party Software and Services.</span> The Services may include or rely on third-party software, components, content, data, APIs, or services (including Third-Party Sources) that are subject to separate terms and licenses. You agree to comply with those third-party terms and licenses. Third-party software and services are provided "as is" by their respective providers, and the Company is not responsible for third-party acts or omissions.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Reservation of Rights.</span> Except for the limited license granted above, you acknowledge and agree that the Company and its licensors own and retain all right, title, and interest in and to the Services and all related technology and intellectual property, including without limitation all software, code, algorithms, models, databases, user interfaces, designs, logos, trademarks, service marks, trade names, text, graphics, photos, audio, video, and other content made available by the Company (collectively, "Company Content"), and all improvements, enhancements, modifications, derivative works, and feedback related thereto.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Termination of License.</span> This license will automatically terminate (without notice) if you violate this Agreement. Upon termination, you must immediately cease all access to and use of the Services, and (if applicable) uninstall the Mobile App and delete any copies in your possession or control, except to the extent prohibited by applicable law.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            13. Restrictions on Use
          </h2>
          
          <p className="mb-4">
            You agree that you will not (and will not permit or enable any third party to) do any of the following, except to the extent such restriction is prohibited by applicable law:
          </p>

          <p className="mb-4">
            <span className="font-semibold">Copy, distribute, or exploit.</span> Copy, reproduce, republish, upload, post, transmit, distribute, display, perform, rent, lease, lend, sell, sublicense, assign, transfer, or otherwise make available the Services or any Company Content, in whole or in part, for any purpose.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Reverse engineer.</span> Reverse engineer, decompile, disassemble, decode, attempt to derive source code from, or otherwise attempt to extract or discover the source code, underlying ideas, algorithms, model weights, system prompts, or trade secrets of any portion of the Services, except to the extent such restriction is prohibited by applicable law.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Derivative works / modifications.</span> Modify, adapt, translate, create derivative works from, or otherwise alter any part of the Services or Company Content, except as expressly permitted by the Company in writing.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Circumvent security.</span> Probe, scan, test, or attempt to breach the security or authentication measures of the Services or any related systems or networks; bypass, disable, or interfere with security-related features; or access non-public areas of the Services without authorization.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Interfere with operations.</span> Interfere with, disrupt, overburden, or impair the Services, servers, networks, or systems connected to the Services, including by introducing malware, bots, scrapers, spiders, worms, trojans, time bombs, or other harmful code or processes.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Unauthorized access / accounts.</span> Access, search, scrape, or collect information from the Services by any automated means (including scripts, bots, crawlers, or scraping tools) except as expressly permitted; create accounts by any means other than our publicly supported interfaces; or use another user's account without permission.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Abuse or misuse.</span> Use the Services in a manner that is unlawful, fraudulent, deceptive, defamatory, threatening, harassing, hateful, discriminatory, or otherwise harmful; or that violates the rights of others (including privacy, publicity, and intellectual property rights).
          </p>

          <p className="mb-4">
            <span className="font-semibold">Impersonation.</span> Impersonate any person or entity, misrepresent your affiliation, or otherwise engage in conduct intended to mislead others regarding your identity or authority.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Commercial solicitation / spam.</span> Use the Services for unsolicited promotions, advertising, affiliate spam, pyramid schemes, bulk messaging, or any other solicitation that we do not expressly authorize in writing.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Circumvent limits.</span> Circumvent or attempt to circumvent any access controls, rate limits, feature restrictions, storage limits, usage limits, fees, or paywalls; or attempt to obtain access to features or data you are not authorized to access.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Exploit vulnerabilities.</span> Use or attempt to use any vulnerability, exploit, or bug to gain unauthorized access, disrupt service, or obtain any benefit (including financial benefit) not intended by the Company; or fail to promptly report discovered vulnerabilities to us.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Unlawful content.</span> Store, upload, transmit, or share content that is unlawful or that promotes illegal activity, violence, self-harm, or exploitation; or that contains pornography or sexually explicit content (including content involving minors, which is strictly prohibited).
          </p>

          <p className="mb-4">
            <span className="font-semibold">Harassment of Company personnel.</span> Harass, threaten, or abuse Company personnel, representatives, contractors, or agents performing services on behalf of the Company.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Compliance violations.</span> Use the Services in violation of any applicable laws or regulations, including export control, sanctions, anti-money laundering, and counterterrorism laws, or in violation of any applicable app store rules or third-party terms.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Frame / mirror / competing service.</span> Frame, mirror, or otherwise incorporate any portion of the Services into any product or service; use the Services to build or improve a competing product or service; or use the Services to benchmark, test, or evaluate performance for competitive purposes without our prior written consent.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Enforcement.</span> We may investigate and take any action we deem appropriate, in our sole discretion, for actual or suspected violations of this Section, including removing content, restricting features, suspending or terminating accounts, and reporting to law enforcement. We may also seek injunctive relief and any other remedies available at law or in equity.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No waiver.</span> Our failure to enforce this Section in any instance does not constitute a waiver of our right to enforce it in the future.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            14. License Grant to Your Content
          </h2>
          
          <p className="mb-4">
            Except for any rights expressly granted to you in these Terms and subject to our Privacy Policy, you grant the Company the broadest license permitted by applicable law to use content and information you provide through the Services.
          </p>

          <p className="mb-4">
            <span className="font-semibold">A. License.</span> To the maximum extent permitted by law, and except for non-public personal information handled as described in our Privacy Policy, you hereby grant the Company a perpetual, worldwide, royalty-free, fully paid, non-exclusive, transferable, sublicensable, and (to the extent permitted by law) irrevocable license to host, store, reproduce, use, process, modify, adapt, format, translate, create derivative works from, distribute, publicly display, publicly perform, and otherwise exploit any User Content and other information you submit, post, upload, transmit, or otherwise provide through the Services or to the Company (including via email, support communications, surveys, or other correspondence), for any lawful purpose related to: (i) operating, providing, maintaining, securing, and improving the Services; (ii) developing new products, services, features, and functionality; (iii) marketing and promoting the Services (subject to your settings and applicable law); (iv) moderation, trust & safety, fraud prevention, legal compliance, and enforcement of these Terms; and (v) creating, using, and commercializing aggregated and/or de-identified data derived from your use of the Services (which is not personal information and is not User Content).
          </p>

          <p className="mb-4">
            <span className="font-semibold">B. No Compensation; No Confidentiality.</span> You acknowledge and agree that: (i) you will receive no compensation for any rights granted under this Section; (ii) the Company has no obligation to treat User Content or other information you provide as confidential, except as required by law or as set forth in the Privacy Policy; and (iii) the Company is not obligated to use, display, or maintain any User Content and may remove or delete it at any time as permitted by these Terms and our Privacy Policy.
          </p>

          <p className="mb-4">
            <span className="font-semibold">C. Rights Clearance.</span> You represent and warrant that you own or control all rights necessary to grant the license above and that the Company's exercise of such rights will not violate any law or infringe, misappropriate, or otherwise violate any third-party rights (including intellectual property, privacy, publicity, or contractual rights). You agree to indemnify, defend, and hold harmless the Company from any claims arising from your breach of this Section, as provided in these Terms.
          </p>

          <p className="mb-4">
            <span className="font-semibold">D. Public/Shared Content.</span> If you choose to make User Content public or shared with other users (including through social features, challenges, leaderboards, events, or communities), you acknowledge that such User Content may be viewed, re-shared, copied, or otherwise used by other users and third parties, and the Company is not responsible for any such use.
          </p>

          <p className="mb-4">
            <span className="font-semibold">E. Moral Rights Waiver.</span> To the maximum extent permitted by law, you waive (and agree not to assert) any moral rights or similar rights in your User Content, and you agree to provide any additional consents reasonably requested by the Company to allow us to use your User Content as described in this Section.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            15. Suspension of Transactions and Services
          </h2>
          
          <p className="mb-4">
            Without limiting any other rights or remedies we may have under these Terms, at law, or in equity, the Company may, in its sole discretion and at any time, with or without notice, do any of the following:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>suspend, restrict, or terminate your access to the Services or any portion thereof;</li>
            <li>suspend, delay, reverse, cancel, refuse, or limit any transaction, event registration, challenge entry, payout, credit, refund, or other activity facilitated through the Services;</li>
            <li>impose additional requirements, verification steps, limits, or conditions on your use of the Services; and/or</li>
            <li>remove, block, restrict, or delete any User Content,</li>
          </ul>

          <p className="mb-4">
            for any reason or no reason, including, without limitation, if we believe (a) you violated these Terms; (b) your account or activity poses a risk to the Company, users, or third parties; (c) we suspect fraud, abuse, or unauthorized activity; (d) we are investigating potential misconduct; (e) we must comply with law, regulation, court order, or governmental request; (f) required third-party services (including payment processors or Third-Party Sources) are unavailable or impose restrictions; or (g) we determine, in our sole discretion, that continued access is not in the Company's best interests.
          </p>

          <p className="mb-4">
            You acknowledge and agree that: (i) the Company has no liability for any suspension, restriction, delay, cancellation, or termination under this Section to the maximum extent permitted by law; (ii) we are not obligated to provide any reason for our actions; and (iii) during any suspension or after termination, we may deny you access to your account, data, or User Content, subject to our Privacy Policy and applicable law. Any Fees paid are non-refundable except where required by law or expressly stated otherwise by the Company in writing.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            16. Third-Party Links, Third-Party Services, and Third-Party Sources
          </h2>
          
          <p className="mb-4">
            The Services may integrate with, link to, or otherwise make available third-party websites, applications, services, content, products, offers, advertisements, or resources, including Third-Party Sources (collectively, "Third-Party Services"). Third-Party Services are provided solely as a convenience to you. The Company does not control, endorse, sponsor, recommend, or assume responsibility for any Third-Party Services, including their availability, content, accuracy, legality, security, privacy practices, or performance.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Use at your own risk.</span> Your access to and use of Third-Party Services is entirely at your own risk and is subject to the third party's terms, conditions, and privacy policies. You are solely responsible for reviewing and complying with those terms and policies. We are not responsible for any harm, loss, damages, or disputes arising out of or relating to Third-Party Services, including any actions or omissions of third parties.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No warranties; no liability.</span> To the maximum extent permitted by law, the Company disclaims all liability and makes no representations or warranties of any kind regarding Third-Party Services. Without limiting the foregoing, the Company is not responsible for: (a) errors, interruptions, or failures of Third-Party Services; (b) the accuracy or completeness of Third-Party Source data; (c) changes to, suspension of, or discontinuation of Third-Party Services; (d) any third-party transactions, purchases, payments, deliveries, refunds, chargebacks, or disputes; (e) any content, advice, recommendations, or offers made by third parties; or (f) any loss or damage resulting from your sharing of information with third parties.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Data sharing authorization.</span> If you connect the Services to any Third-Party Service or Third-Party Source, you authorize the Company to exchange data with that Third-Party Service as necessary to provide the Services (subject to our Privacy Policy and your settings). You acknowledge that we cannot guarantee the security of data while it is transmitted through third-party systems, and that your use of Third-Party Services may result in data being collected, used, and shared by third parties according to their practices.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No publisher role; no monitoring obligation.</span> Providing links to Third-Party Services does not mean we are a publisher or distributor of third-party content. We have no obligation to monitor, review, or verify Third-Party Services, and we may remove or disable access to any Third-Party Service at any time without notice.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            17. Feedback
          </h2>
          
          <p className="mb-4">
            If you or any Authorized User submit, transmit, or otherwise provide any ideas, suggestions, proposals, improvements, feature requests, designs, bug reports, reviews, comments, data, know-how, or other feedback regarding the Services or the Company (collectively, "Feedback"), you agree that:
          </p>

          <p className="mb-4">
            <span className="font-semibold">No obligation.</span> The Company is under no obligation to use, implement, respond to, or maintain any Feedback, and you acknowledge that any consideration, response, or discussion does not create any obligation of confidentiality or compensation.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Unrestricted rights.</span> To the maximum extent permitted by law, you grant the Company a perpetual, worldwide, royalty-free, fully paid, transferable, sublicensable, and irrevocable license to use, reproduce, modify, create derivative works from, distribute, publicly display, publicly perform, disclose, and otherwise exploit the Feedback (and any ideas, concepts, techniques, or know-how contained in it) for any purpose, including commercial purposes, without attribution or compensation to you or any third party.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No confidentiality.</span> Feedback is provided on a non-confidential basis unless we expressly agree otherwise in a signed writing.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No infringement.</span> You represent and warrant that you have all rights necessary to provide the Feedback and to grant the rights above, and that providing Feedback does not violate any third-party rights or obligations.
          </p>

          <p className="mb-4">
            For clarity, the Company's use of Feedback will not affect your ownership of your pre-existing intellectual property, but you acknowledge that the Company may develop products or features that are similar to or competitive with ideas reflected in Feedback.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            18. Beta Services
          </h2>
          
          <p className="mb-4">
            From time to time, we may make available features, products, tools, integrations, or services labeled or otherwise identified as "alpha," "beta," "preview," "early access," "experimental," "evaluation," or similar (collectively, "Beta Services"). Beta Services are provided solely for evaluation and testing purposes and may be offered to you at our sole discretion.
          </p>

          <p className="mb-4">
            By accessing or using any Beta Services, you acknowledge and agree that:
          </p>

          <p className="mb-4">
            <span className="font-semibold">Unstable; may change or end at any time.</span> Beta Services may be incomplete, inaccurate, unreliable, or unstable; may contain bugs, errors, and defects; and may be modified, suspended, or discontinued at any time, with or without notice, in our sole discretion.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No guarantees; "AS IS."</span> BETA SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" and, to the maximum extent permitted by law, WITHOUT ANY WARRANTIES, REPRESENTATIONS, OR GUARANTEES OF ANY KIND, whether express, implied, statutory, or otherwise, including any implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, or quiet enjoyment.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Use at your own risk; no liability.</span> YOU USE BETA SERVICES ENTIRELY AT YOUR OWN RISK. To the maximum extent permitted by law, WE WILL HAVE NO LIABILITY ARISING OUT OF OR RELATING TO BETA SERVICES, including any loss of data, loss of content, service interruption, security incident, or any direct, indirect, incidental, special, consequential, punitive, exemplary, or other damages, whether in contract, tort, or otherwise, even if we have been advised of the possibility of such damages.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Security and data risks.</span> Beta Services may not be subjected to the same security practices, controls, testing, audits, or monitoring as generally available Services. You are responsible for maintaining backups and using Beta Services in a manner that minimizes risk, including not relying on Beta Services for critical decisions or activities.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Feedback; contact.</span> In exchange for access to Beta Services, you agree that we may contact you (including via email, in-app, or other electronic means) to request Feedback about Beta Services, and you agree to provide reasonable Feedback upon request. Any Feedback you provide is governed by Section 17.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Confidentiality of Beta Services.</span> To the maximum extent permitted by law, you agree to keep confidential and not disclose to any third party any non-public information about Beta Services, including their existence, performance, features, screenshots, benchmarks, or other details ("Beta Confidential Information"), unless we expressly authorize disclosure in writing. This obligation does not apply to information that: (a) is or becomes publicly available through no breach by you; (b) you already lawfully possessed without confidentiality obligation; or (c) you independently developed without use of Beta Confidential Information.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Required disclosures.</span> If you are required by law, regulation, or court order to disclose Beta Confidential Information, you may disclose only what is legally required, and (to the extent permitted by law) you agree to provide us reasonable advance notice so we may seek to limit or prevent disclosure.
          </p>

          <p className="mb-4">
            We may revoke your access to Beta Services at any time, with or without notice, and without liability.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            19. Assumption of Risks; Release
          </h2>
          
          <p className="mb-4 font-semibold">
            A. Assumption of Risk.
          </p>

          <p className="mb-4">
            YOU UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE SERVICES IS VOLUNTARY AND IS AT YOUR SOLE RISK. The Services may involve or relate to physical activity, training plans, challenges, events, community features, and lifestyle changes (including changes to exercise, sleep, recovery, nutrition, hydration, and supplementation). You acknowledge that physical activity and lifestyle changes carry inherent and significant risks, including the risk of serious injury, disability, illness, property damage, emotional distress, or death, and that risks may arise from, among other things, overexertion, unknown medical conditions, environmental hazards, equipment failure, the actions or omissions of Other Users, and your own conduct.
          </p>

          <p className="mb-4">
            To the maximum extent permitted by law, you expressly and freely assume all risks of any kind, whether known or unknown, foreseeable or unforeseeable, arising out of or relating to: (i) your access to or use of the Services; (ii) any actions you take (or do not take) based on the Services, including any scores, recommendations, plans, prompts, alerts, or other outputs; (iii) any workouts, training, events, meetups, challenges, competitions, leaderboards, or community interactions facilitated through the Services; (iv) any Third-Party Services, Third-Party Sources, devices, wearables, or integrations; and (v) any communications or interactions with Other Users, clubs, coaches, trainers, creators, brands, sponsors, or third parties.
          </p>

          <p className="mb-4 font-semibold">
            B. Release and Waiver.
          </p>

          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU HEREBY IRREVOCABLY AND UNCONDITIONALLY RELEASE, WAIVE, AND FOREVER DISCHARGE the Company, and its past, present, and future parents, subsidiaries, affiliates, officers, directors, employees, contractors, agents, representatives, licensors, suppliers, and successors and assigns (collectively, the "Released Parties") from any and all claims, demands, causes of action, liabilities, damages, losses, costs, and expenses (including attorneys' fees and costs) of every kind and nature, whether known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or related to: (i) your access to or use of the Services; (ii) any injury, illness, harm, loss, or damages to you or your property; (iii) any acts or omissions of Other Users or third parties; (iv) any Third-Party Services or Third-Party Source data; (v) any alleged failure by the Company to warn you of any risk; and (vi) any dispute between you and any third party, including Other Users.
          </p>

          <p className="mb-4 font-semibold">
            C. Covenant Not to Sue.
          </p>

          <p className="mb-4">
            To the maximum extent permitted by law, you agree that you will not sue, file, or maintain any claim against any Released Party for any matter released under this Section 19, and you agree that if you violate this covenant, you will be responsible for all costs and expenses (including reasonable attorneys' fees) incurred by the Released Parties in connection with enforcing this Section, in addition to any other remedies available.
          </p>

          <p className="mb-4 font-semibold">
            D. Indemnity for Released Claims.
          </p>

          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless the Released Parties from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (i) your breach of this Section 19; (ii) your access to or use of the Services; (iii) your participation in any events, challenges, or interactions with Other Users; or (iv) any claim brought by a third party arising from your conduct.
          </p>

          <p className="mb-4 font-semibold">
            E. No Limitation of Mandatory Rights.
          </p>

          <p className="mb-4">
            Nothing in this Section 19 is intended to exclude, waive, or limit any rights or remedies that cannot be excluded, waived, or limited under applicable law. However, this Section 19 applies to the maximum extent permitted by law in your jurisdiction.
          </p>

          <p className="mb-4 font-semibold">
            F. California Residents (CA Civil Code § 1542 Waiver).
          </p>

          <p className="mb-4">
            If you are a California resident, you expressly waive California Civil Code Section 1542, which states: "A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party." You acknowledge that you have read and understand this waiver and that you knowingly and voluntarily intend to waive the protections of Section 1542 and any similar law in any other jurisdiction.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            20. Indemnity
          </h2>
          
          <p className="mb-4">
            To the maximum extent permitted by applicable law, you agree to indemnify, defend, and hold harmless the Company and its parents, subsidiaries, affiliates, and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns (collectively, the "Indemnified Parties") from and against any and all claims, demands, actions, suits, proceedings, investigations, liabilities, damages, judgments, awards, penalties, fines, losses, costs, and expenses of any kind (including, without limitation, reasonable attorneys' fees and costs) arising out of, relating to, or in connection with:
          </p>

          <p className="mb-4">
            <span className="font-semibold">Your use of the Services.</span> Your access to or use of (or inability to use) the Services, including any participation in workouts, plans, challenges, events, meetups, leaderboards, community features, communications, or interactions with Other Users or third parties;
          </p>

          <p className="mb-4">
            <span className="font-semibold">Your Content.</span> Any User Content or other information you submit, post, upload, transmit, publish, or otherwise make available through the Services (including any claim that your User Content infringes, misappropriates, or violates any intellectual property, privacy, publicity, or other rights);
          </p>

          <p className="mb-4">
            <span className="font-semibold">Your breach.</span> Any breach or alleged breach of this Agreement by you, any Authorized User, or anyone using your account or credentials (whether or not authorized by you);
          </p>

          <p className="mb-4">
            <span className="font-semibold">Your transactions and payments.</span> Any purchase, subscription, payment, chargeback, refund dispute, promotional use, transaction, or other financial activity related to your use of the Services, including disputes with payment processors, app stores, Other Users, or third parties;
          </p>

          <p className="mb-4">
            <span className="font-semibold">Third-party services and sources.</span> Your access to or use of any Third-Party Services, Third-Party Sources, devices, wearables, integrations, or linked accounts, including any data you authorize to be shared, synced, imported, or exported;
          </p>

          <p className="mb-4">
            <span className="font-semibold">Violations of law and rights.</span> Your violation of any applicable law, rule, or regulation, or the rights of any third party (including privacy, publicity, consumer protection, safety, intellectual property, or contractual rights);
          </p>

          <p className="mb-4">
            <span className="font-semibold">Misconduct.</span> Any fraud, negligence, willful misconduct, or other wrongful act or omission by you, any Authorized User, or anyone using your account or credentials; and
          </p>

          <p className="mb-4">
            <span className="font-semibold">Disputes with others.</span> Any dispute between you and any Other User or third party arising out of or relating to the Services, including claims for injury, harm, loss, or damages.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Defense and cooperation.</span> We reserve the right, at our option and in our sole discretion, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (in which case you agree to cooperate fully with us). You may not settle any claim without our prior written consent if the settlement imposes any obligation, admission, payment, restriction, or liability on any Indemnified Party.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Scope.</span> This indemnity obligation applies to the maximum extent permitted by law, and will survive termination of this Agreement and your use of the Services.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            21. Limitations on Liability and Disclaimers
          </h2>
          
          <p className="mb-4 font-semibold">
            A. Disclaimer of Warranties ("AS IS").
          </p>

          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES (INCLUDING THE SITE, MOBILE APP, ALL COMPANY CONTENT, USER CONTENT, THIRD-PARTY SERVICES, THIRD-PARTY SOURCE DATA, AND ANY OUTPUTS SUCH AS SCORES, PLANS, RECOMMENDATIONS, ALERTS, OR REMINDERS) ARE PROVIDED "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS," WITHOUT ANY REPRESENTATIONS, WARRANTIES, GUARANTEES, OR CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. WITHOUT LIMITING THE FOREGOING, THE COMPANY DISCLAIMS ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS, RELIABILITY, TIMELINESS, QUALITY, QUIET ENJOYMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
          </p>

          <p className="mb-4">
            WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE, VIRUS-FREE, OR THAT DEFECTS WILL BE CORRECTED; THAT ANY CONTENT OR OUTPUTS WILL BE ACCURATE, COMPLETE, OR USEFUL; OR THAT ANY PARTICULAR RESULTS (INCLUDING HEALTH, FITNESS, WELLNESS, PERFORMANCE, OR FINANCIAL RESULTS) WILL BE ACHIEVED. YOU ASSUME ALL RISK ARISING FROM YOUR USE OF THE SERVICES.
          </p>

          <p className="mb-4 font-semibold">
            B. No Reliance; Health/Fitness Disclaimer.
          </p>

          <p className="mb-4">
            YOU ACKNOWLEDGE AND AGREE THAT ANY CONTENT OR OUTPUTS PROVIDED THROUGH THE SERVICES ARE FOR GENERAL INFORMATIONAL PURPOSES ONLY AND ARE NOT MEDICAL ADVICE OR A SUBSTITUTE FOR PROFESSIONAL CARE. YOU ARE SOLELY RESPONSIBLE FOR YOUR DECISIONS AND ACTIONS, INCLUDING WHETHER TO SEEK PROFESSIONAL ADVICE AND WHETHER TO ENGAGE IN ANY PHYSICAL ACTIVITY OR LIFESTYLE CHANGES.
          </p>

          <p className="mb-4 font-semibold">
            C. Exclusion of Certain Damages.
          </p>

          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY OR ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, LICENSORS, OR SUPPLIERS (COLLECTIVELY, THE "COMPANY PARTIES") BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, PUNITIVE, OR AGGRAVATED DAMAGES, OR FOR ANY LOSS OF PROFITS, LOST REVENUE, LOST SAVINGS, LOSS OF BUSINESS, LOSS OF GOODWILL, LOSS OF DATA, BUSINESS INTERRUPTION, PERSONAL INJURY, OR PROPERTY DAMAGE, ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, WARRANTY, STATUTE, OR ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
          </p>

          <p className="mb-4 font-semibold">
            D. Additional Limitations; Third-Party and Network Risks.
          </p>

          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY PARTIES WILL NOT BE LIABLE FOR ANY DAMAGES OR LOSSES ARISING OUT OF OR RELATING TO: (i) VIRUSES, MALWARE, DATA CORRUPTION, FAILED MESSAGES, TRANSMISSION ERRORS, OR SYSTEM OUTAGES; (ii) TELECOMMUNICATIONS PROVIDERS, INTERNET BACKBONE FAILURES, NETWORK CONGESTION, OR DEVICE FAILURES; (iii) THIRD-PARTY SERVICES, THIRD-PARTY SOURCES, WEARABLES, DEVICES, OR INTEGRATIONS; (iv) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR CONTENT OR DATA; (v) ANY ACTS OR OMISSIONS OF OTHER USERS OR THIRD PARTIES; (vi) LINKS TO THIRD-PARTY WEBSITES OR CONTENT; (vii) YOUR FAILURE TO MAINTAIN THE CONFIDENTIALITY OF CREDENTIALS; OR (viii) EVENTS BEYOND THE COMPANY'S REASONABLE CONTROL.
          </p>

          <p className="mb-4 font-semibold">
            E. Aggregate Liability Cap.
          </p>

          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY PARTIES' TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES EXCEED THE GREATER OF: (i) THE TOTAL AMOUNT OF FEES ACTUALLY PAID BY YOU TO THE COMPANY FOR THE SERVICES IN THE SIX (6) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (ii) ONE HUNDRED U.S. DOLLARS (US $100).
          </p>

          <p className="mb-4">
            FOR CLARITY, THIS LIMITATION APPLIES TO ALL CAUSES OF ACTION, INCLUDING BREACH OF CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, MISREPRESENTATION, STATUTORY CLAIMS, OR ANY OTHER THEORY, AND APPLIES EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
          </p>

          <p className="mb-4 font-semibold">
            F. Basis of the Bargain.
          </p>

          <p className="mb-4">
            YOU ACKNOWLEDGE THAT THE DISCLAIMERS, EXCLUSIONS, AND LIMITATIONS OF LIABILITY SET FORTH IN THIS SECTION ARE AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND THE COMPANY AND WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
          </p>

          <p className="mb-4 font-semibold">
            G. Exceptions; Jurisdictional Limits.
          </p>

          <p className="mb-4">
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF CERTAIN DAMAGES OR LIABILITY. TO THE EXTENT SUCH LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS. IN SUCH CASES, THE COMPANY'S LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            22. Term and Termination
          </h2>
          
          <p className="mb-4 font-semibold">
            A. Term.
          </p>

          <p className="mb-4">
            This Agreement begins on the date you first accept it or first access or use the Services (whichever occurs first) and will continue until terminated in accordance with these Terms.
          </p>

          <p className="mb-4 font-semibold">
            B. Our Right to Modify, Suspend, or Discontinue the Services.
          </p>

          <p className="mb-4">
            To the maximum extent permitted by law, we may, at any time and in our sole discretion, modify, suspend, restrict, or discontinue any portion of the Services (including any feature, content, integration, or availability), temporarily or permanently, with or without notice and without liability to you. We are not liable for any unavailability of the Services or any loss of data, content, benefits, or access resulting from such actions.
          </p>

          <p className="mb-4 font-semibold">
            C. Termination or Suspension by the Company.
          </p>

          <p className="mb-4">
            To the maximum extent permitted by law, we may, in our sole discretion, at any time and for any reason or no reason, with or without notice, suspend, restrict, or terminate: (i) your account; (ii) your access to the Services (or any portion thereof); and/or (iii) this Agreement. We are not required to provide you with notice or an explanation for any such action.
          </p>

          <p className="mb-4">
            Without limiting the foregoing, we may suspend or terminate your access immediately if we believe (a) you violated these Terms; (b) your use creates risk or potential legal exposure for the Company or others; (c) your account is compromised or is being used fraudulently; (d) you have initiated chargebacks or payment reversals; (e) we are required to do so to comply with law, regulation, legal process, or governmental request; or (f) we elect to discontinue the Services.
          </p>

          <p className="mb-4 font-semibold">
            D. Termination by You.
          </p>

          <p className="mb-4">
            You may stop using the Services at any time. If the Services allow account deletion, you may request deletion through the applicable settings or by contacting support@clucklabs.com, subject to our Privacy Policy and applicable law. If you have an auto-renewing subscription purchased through an External Service (e.g., Apple), deleting your account or deleting the Mobile App does not cancel your subscription—you must cancel through the applicable External Service as described in Section 11.
          </p>

          <p className="mb-4 font-semibold">
            E. Effect of Termination.
          </p>

          <p className="mb-4">
            Upon any termination or expiration of this Agreement or termination/suspension of your access to the Services:
          </p>

          <p className="mb-4">
            <span className="font-semibold">License ends.</span> All rights and licenses granted to you under these Terms will immediately terminate, and you must cease all access to and use of the Services.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Amounts owed.</span> Any Fees and other amounts owed by you to the Company (or to an External Service, as applicable) become immediately due and payable to the extent not already paid.
          </p>

          <p className="mb-4">
            <span className="font-semibold">No refunds.</span> Except where required by law, Fees are non-refundable and we have no obligation to provide credits, refunds, or prorated reimbursements for unused time or benefits.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Data and Content.</span> To the maximum extent permitted by law and subject to our Privacy Policy and applicable law, we may delete, disable access to, or retain your data and User Content at our discretion. You acknowledge that you may lose access to data or content associated with your account, and we are not liable for any such loss.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Retention.</span> We may retain certain information and data as required or permitted by law (including for legal compliance, dispute resolution, fraud prevention, security, auditing, backup, and enforcement), and we may retain aggregated and/or de-identified data indefinitely.
          </p>

          <p className="mb-4 font-semibold">
            F. Survival.
          </p>

          <p className="mb-4">
            All provisions that by their nature should survive termination will survive, including without limitation: Sections relating to ownership, license restrictions, User Content licenses, Feedback, Beta Services, assumption of risk, releases, indemnification, disclaimers, limitation of liability, dispute resolution/arbitration, governing law, and any other provisions intended to survive.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            23. Separate Agreements
          </h2>
          
          <p className="mb-4">
            From time to time, the Company may enter into separate written agreements with you (each, a "Separate Agreement") governing specific products, services, features, subscriptions, enterprise/team access, promotions, or other arrangements. To the extent a Separate Agreement expressly applies to your use of certain Services, and to the extent there is a direct conflict between the Separate Agreement and these Terms, the Separate Agreement will control only with respect to the subject matter it covers and only for the duration it applies. In all other cases, these Terms remain in full force and effect.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            24. Notices; Electronic Communications
          </h2>
          
          <p className="mb-4">
            <span className="font-semibold">A. Consent to Electronic Communications.</span> By using the Services and/or providing us your email address, phone number, or other contact information, you consent to receive communications from us electronically, including via the Services (e.g., banners, pop-ups, in-app messages), email, push notifications, SMS/text messages (where permitted by law), or other electronic means. You agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communications be in writing.
          </p>

          <p className="mb-4">
            <span className="font-semibold">B. Methods and Effectiveness of Notice.</span> We may provide you with notices in any of the following ways: (i) by posting or displaying notices through the Services; (ii) by sending an email to the email address associated with your account (or otherwise provided by you); (iii) by sending a text/SMS message to the phone number you provide (where permitted by law); and/or (iv) by any other reasonable means. Unless otherwise stated, notice will be deemed received and effective: (a) if provided through the Services, when posted or displayed; (b) if sent by email, when the email is sent (regardless of whether you actually receive or read it); and (c) if sent by SMS/text, when transmitted.
          </p>

          <p className="mb-4">
            <span className="font-semibold">C. You Must Keep Contact Info Current.</span> You are responsible for keeping your contact information accurate and up to date. We are not responsible for any failure to notify you due to outdated, incorrect, or missing contact information, spam filtering, or your service provider's blocking or delivery failures.
          </p>

          <p className="mb-4">
            <span className="font-semibold">D. Promotional Communications.</span> You may opt out of certain promotional communications as described in our Privacy Policy or in the applicable message, but you acknowledge that we may still send you non-promotional communications related to the Services, your account, security, billing, and legal notices (including updates to these Terms), which are not subject to opt-out.
          </p>

          <p className="mb-4">
            <span className="font-semibold">E. Notices to the Company.</span> Unless expressly stated otherwise in these Terms, any notice to the Company must be sent to: support@clucklabs.com (and may be redirected to another address if we specify). We may require additional information to verify your identity and account before acting on certain requests.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            25. Binding Arbitration; Class Action Waiver; Jury Trial Waiver
          </h2>
          
          <p className="mb-4 font-semibold uppercase">
            PLEASE READ THIS SECTION CAREFULLY. It affects your legal rights. It requires arbitration on an individual basis and limits how disputes may be resolved.
          </p>

          <p className="mb-4">
            <span className="font-semibold">A. Informal Resolution First.</span> If you have any dispute, claim, or controversy arising out of or relating to the Services or these Terms (a "Dispute"), you agree to first contact us at support@clucklabs.com and attempt to resolve the Dispute informally. You agree to provide a brief written description of the Dispute and your contact information, and to allow a reasonable time for us to respond. The parties agree to engage in good-faith efforts to resolve the Dispute before initiating arbitration.
          </p>

          <p className="mb-4">
            <span className="font-semibold">B. Agreement to Arbitrate.</span> Except as expressly provided in Section 25(C), you and the Company agree that any Dispute (whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory) arising out of or relating to: (i) these Terms; (ii) the Services; (iii) any content, communications, transactions, subscriptions, or purchases; (iv) your relationship with the Company; or (v) the validity, enforceability, or scope of this arbitration agreement, shall be resolved by final and binding arbitration on an individual basis and not in a court of law.
          </p>

          <p className="mb-4">
            <span className="font-semibold">C. Exceptions (Disputes Not Required to Be Arbitrated).</span> Notwithstanding Section 25(B), either party may seek: Individual small claims relief in a small claims court of competent jurisdiction (so long as the matter remains an individual action and proceeds only in small claims court); and/or Injunctive or other equitable relief in a court of competent jurisdiction to prevent or stop the actual or threatened infringement, misappropriation, or violation of a party's intellectual property rights (including copyrights, trademarks, trade names, logos, trade secrets, or patents). These exceptions do not waive the requirement to arbitrate any other Dispute or any request for damages or other relief that is not within the scope of the exceptions.
          </p>

          <p className="mb-4">
            <span className="font-semibold">D. Arbitration Administrator; Rules.</span> The arbitration will be administered by the American Arbitration Association ("AAA") and conducted under the AAA's Commercial Arbitration Rules (or, if applicable based on the nature of the Dispute, the AAA's Consumer Arbitration Rules), as modified by these Terms. The AAA rules are available from the AAA. If the AAA is unavailable or unwilling to administer the arbitration, the parties will agree to a substitute arbitration provider, and if they cannot agree, a court of competent jurisdiction may appoint the provider.
          </p>

          <p className="mb-4">
            <span className="font-semibold">E. Arbitration Location; Hearing Format.</span> Unless you and the Company agree otherwise, the arbitration will be conducted: (i) in the state of your residence; or (ii) in the county and state of the Company's chosen legal counsel at the time the arbitration is initiated. The arbitrator may conduct proceedings by telephone, video conference, written submissions, or in-person hearing, in the arbitrator's discretion, consistent with the AAA rules and these Terms.
          </p>

          <p className="mb-4">
            <span className="font-semibold">F. Individual Basis Only; Class Action Waiver.</span> YOU AND THE COMPANY AGREE THAT ARBITRATION WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS. YOU AND THE COMPANY EACH WAIVE ANY RIGHT TO HAVE ANY DISPUTE BROUGHT, HEARD, ADMINISTERED, RESOLVED, OR ARBITRATED AS A CLASS, COLLECTIVE, COORDINATED, CONSOLIDATED, REPRESENTATIVE, OR PRIVATE ATTORNEY GENERAL ACTION, OR TO PARTICIPATE IN ANY SUCH ACTION. The arbitrator may award relief only in favor of the individual party seeking relief and only to the extent necessary to resolve the individual Dispute. The arbitrator may not consolidate more than one person's claims and may not preside over any form of class, collective, coordinated, consolidated, representative, or private attorney general proceeding.
          </p>

          <p className="mb-4">
            <span className="font-semibold">G. Waiver of Jury Trial.</span> TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU AND THE COMPANY WAIVE THE RIGHT TO A TRIAL BY JURY AND TO HAVE DISPUTES RESOLVED IN COURT, EXCEPT AS PROVIDED IN SECTION 25(C).
          </p>

          <p className="mb-4">
            <span className="font-semibold">H. Arbitrator Authority; Scope; Remedies.</span> The arbitrator shall have exclusive authority to resolve any Dispute, including any dispute regarding the interpretation, applicability, enforceability, or formation of this arbitration agreement, except that a court of competent jurisdiction will have authority to determine the enforceability of the class action waiver to the extent required by law. The arbitrator may award any relief permitted by applicable law on an individual basis; however, the arbitrator may not award punitive damages except to the extent such limitation is prohibited by applicable law, and may not award relief that is prohibited by these Terms.
          </p>

          <p className="mb-4">
            <span className="font-semibold">I. Discovery and Confidentiality.</span> Pre-arbitration discovery will be limited to the greatest extent permitted under the AAA rules and as determined by the arbitrator. Unless otherwise required by law, the parties agree that the arbitration proceedings, filings, evidence, and award will be confidential, except as necessary to enforce an award or to comply with legal obligations.
          </p>

          <p className="mb-4">
            <span className="font-semibold">J. Fees and Costs; Attorneys' Fees.</span> Payment of arbitration fees will be governed by the AAA rules and applicable law. The arbitrator will have authority to allocate arbitration costs and fees between the parties as permitted by the AAA rules and applicable law. The arbitrator may award reasonable attorneys' fees and costs to the prevailing party where permitted by applicable law or contract.
          </p>

          <p className="mb-4">
            <span className="font-semibold">K. Time Limit to Bring Claims.</span> To the maximum extent permitted by law, any Dispute must be brought within one (1) year after the claim or cause of action arises; otherwise, the Dispute is permanently barred. Where a shorter or longer period is required by applicable law, that period will apply.
          </p>

          <p className="mb-4">
            <span className="font-semibold">L. Severability.</span> If any portion of this Section 25 is found to be invalid or unenforceable, that portion will be severed and the remainder will be enforced to the fullest extent permitted by law, except that if the class action waiver in Section 25(F) is found unenforceable as to a particular claim, then that claim must be brought in a court of competent jurisdiction (and not in arbitration), but only to the extent required by law, and the parties agree that such claim will be stayed pending arbitration of any arbitrable claims.
          </p>

          <p className="mb-4">
            <span className="font-semibold">M. FAA; Interstate Commerce.</span> You and the Company acknowledge that the Services involve interstate commerce and that this arbitration agreement is governed by the Federal Arbitration Act ("FAA") to the maximum extent applicable, and not by state arbitration law, to the extent the FAA preempts state law.
          </p>

          <p className="mb-4 font-semibold uppercase">
            NOTICE: ARBITRATION AND CLASS ACTION WAIVER. BY AGREEING TO THESE TERMS, YOU AND THE COMPANY AGREE THAT ALL DISPUTES WILL BE DECIDED BY NEUTRAL, BINDING ARBITRATION ON AN INDIVIDUAL BASIS (EXCEPT AS SET FORTH IN SECTION 25(C)). YOU UNDERSTAND THAT YOU ARE GIVING UP THE RIGHT TO SUE IN COURT, TO HAVE A JURY TRIAL, AND TO PARTICIPATE IN A CLASS OR REPRESENTATIVE ACTION. IF YOU DO NOT AGREE TO THIS ARBITRATION PROVISION, DO NOT USE THE SERVICES.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            26. Governing Law; Venue
          </h2>
          
          <p className="mb-4">
            Except to the extent governed by the Federal Arbitration Act ("FAA") or other applicable federal law (including with respect to Section 25), this Agreement and any Dispute not subject to arbitration will be governed by and construed in accordance with the laws of the State of New York, USA, without regard to conflict-of-law principles that would result in the application of the laws of another jurisdiction.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Injunctive / IP Relief; Court Proceedings.</span> Notwithstanding Section 25, the Company may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent or stop the actual or threatened infringement, misappropriation, or violation of the Company's (or its licensors') intellectual property rights, including copyrights, trademarks, trade names, logos, trade secrets, or patents.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Exclusive Venue for Non-Arbitrable Matters.</span> For any Dispute or proceeding that is not subject to arbitration under Section 25 (including any claim that falls within Section 25(C) or any claim for which the arbitration agreement is found unenforceable), you agree that such proceeding will be brought exclusively in the state or federal courts located in New York, New York, and you irrevocably submit to the personal jurisdiction of such courts and waive any objection based on inconvenient forum, improper venue, or lack of personal jurisdiction, to the maximum extent permitted by law.
          </p>

          <p className="mb-4">
            <span className="font-semibold">Consumer Protection Carveout.</span> If you reside in a jurisdiction that requires application of the laws of your residence for certain consumer claims, nothing in this Section 26 is intended to limit such non-waivable protections; however, the parties agree that this Section 26 will apply to the maximum extent permitted by law.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            27. Interpretation
          </h2>
          
          <p className="mb-4">
            The division of this Agreement into sections and the insertion of headings are for convenience only and do not affect interpretation. Words such as "including" mean "including without limitation." Words in the singular include the plural and vice versa. Any ambiguities will not be construed against any party merely because that party drafted the language.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            28. Entire Agreement
          </h2>
          
          <p className="mb-4">
            These Terms (including any policies expressly incorporated by reference, such as the Privacy Policy) and any applicable Separate Agreement constitute the entire agreement between you and the Company regarding your access to and use of the Services and supersede all prior or contemporaneous agreements, understandings, communications, and proposals (whether oral or written) relating to the Services. In the event of any conflict between these Terms and any policy incorporated by reference, these Terms will control unless expressly stated otherwise.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            29. Amendment and Waiver
          </h2>
          
          <p className="mb-4">
            We may amend, update, or modify this Agreement at any time by posting the revised Terms on the Site (and/or within the Mobile App) and updating the "Last Updated" date, and we may provide additional notice as required by applicable law. You are responsible for reviewing the Terms regularly. Your continued access to or use of the Services after any amendment becomes effective constitutes your acceptance of the amended Terms. If you do not agree to the amended Terms, you must stop using the Services.
          </p>

          <p className="mb-4">
            No waiver by the Company of any provision of this Agreement will be effective unless in writing and signed by an authorized representative of the Company. No failure or delay by the Company in exercising any right, power, or remedy will operate as a waiver, nor will any single or partial exercise of any right, power, or remedy preclude any other or further exercise. Any waiver will be limited to the specific circumstance for which it is given and will not constitute a continuing waiver of any other provision.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            30. Severability
          </h2>
          
          <p className="mb-4">
            If any provision of this Agreement is held by a court or arbitrator of competent jurisdiction to be illegal, invalid, or unenforceable, that provision will be enforced to the maximum extent permissible, and the remaining provisions will remain in full force and effect. If a provision cannot be enforced as written, it will be interpreted to reflect, as nearly as possible, the original intent of the parties to the maximum extent permitted by law.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            31. Inurement; Successors
          </h2>
          
          <p className="mb-4">
            This Agreement will inure to the benefit of and be binding upon the parties and their respective successors and permitted assigns. You acknowledge that you have read and understood this Agreement and agree that it is the legal equivalent of a written contract.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            32. Assignment
          </h2>
          
          <p className="mb-4">
            You may not assign, transfer, or delegate any of your rights or obligations under this Agreement (by operation of law or otherwise) without the Company's prior written consent, and any attempted assignment without such consent is null and void. The Company may assign, transfer, or delegate this Agreement and any of its rights or obligations under this Agreement, in whole or in part, without notice to you and without your consent, including in connection with any merger, acquisition, reorganization, sale of assets, or change of control. In any such transaction, we may transfer your information and data as part of the transaction, subject to applicable law and our Privacy Policy.
          </p>
        </section>

        <section className="mt-12 border-t-2 border-stroke dark:border-strokedark pt-8">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            33. Support; Contact
          </h2>
          
          <p className="mb-4">
            For questions, complaints, or support issues, please contact support@clucklabs.com. Support hours (if offered) are Monday through Friday, 9:00 a.m. to 5:00 p.m. Pacific Time (excluding holidays).
          </p>

          <p className="mb-4">
            <span className="font-semibold">No Guaranteed Response Time.</span> While we strive to respond within reasonable timeframes, we do not guarantee response times, resolution times, or that any particular issue can or will be resolved. We may route support through third-party providers and may require identity verification before discussing account-specific matters.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Contact Us
          </h2>
          <p className="text-body-color">
            Cluck Labs, Inc.<br />
            9100 Wilshire Blvd<br />
            Ste 333 #232<br />
            Beverly Hills, CA 90212<br />
            Email: support@clucklabs.com<br />
          </p>
        </section>
      </div>
    </div>
  );
}
