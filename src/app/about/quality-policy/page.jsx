import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';

export default function QualityPolicy() {
	return (
		<section>
			<PageTitle title="Политика в области качества" />
			{/* <PolicySection /> */}
			<PolicySection>
				<PolicyTextContent />
			</PolicySection>
		</section>
	);
}
