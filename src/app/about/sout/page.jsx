import PageTitle from '@/components/PageTitle/PageTitle';
// import SoutSection from '@/components/policyPages/soutPage/SoutSection/SoutSection';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent.tsx';

export default function Sout() {
	return (
		<section>
			<PageTitle title="Ведомости по СОУТ" />
			{/* <QualitySection /> */}
			{/* <SoutSection />
			 */}
			<PolicySection>
				<SoutContent />
			</PolicySection>
		</section>
	);
}
