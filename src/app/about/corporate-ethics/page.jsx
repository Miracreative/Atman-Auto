import PageTitle from '@/components/PageTitle/PageTitle';
// import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicySection from '../../../components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '../../../components/policyPages/PolicyTextContent/PolicyTextContent';

export default function CorporateEthics() {
	return (
		<section>
			<PageTitle title="Кодекс корпоративной этики" />
			{/* <PolicySection children={<PolicyTextContent />} /> */}

			<PolicySection>
				<PolicyTextContent />
			</PolicySection>
		</section>
	);
}
