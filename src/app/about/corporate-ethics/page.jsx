import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';

export default function CorporateEthics() {
	return (
		<section>
			<PageTitle title="Кодекс корпоративной этики" />
			<PolicySection children={<PolicyTextContent />} />
		</section>
	);
}
