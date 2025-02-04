import {
  ClientsPage,
  Title,
  CompanyList,
  CompanyItem,
  CompanyLink,
  CompanyLogo,
} from "./styles";

function Clients() {
  return (
    <ClientsPage>
      <Title>Our Clients</Title>
      <CompanyList>
        <CompanyItem>
          <CompanyLink to="/clients/facebook">
            <CompanyLogo
              src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png"
              alt="Facebook Logo"
            />
            Facebook
          </CompanyLink>
        </CompanyItem>

        <CompanyItem>
          <CompanyLink to="/clients/google">
            <CompanyLogo
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google Logo"
            />
            Google
          </CompanyLink>
        </CompanyItem>

        <CompanyItem>
          <CompanyLink to="/clients/amazon">
            <CompanyLogo
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Logo"
            />
            Amazon
          </CompanyLink>
        </CompanyItem>

        <CompanyItem>
          <CompanyLink to="/clients/emirates">
            <CompanyLogo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png"
              alt="Emirates Logo"
            />
            Emirates
          </CompanyLink>
        </CompanyItem>

        <CompanyItem>
          <CompanyLink to="/clients/klm">
            <CompanyLogo
              src="https://www.fahnenversand.de/fotw/images/n/nl$klm61b.gif"
              alt="KLM Logo"
            />
            KLM
          </CompanyLink>
        </CompanyItem>

        <CompanyItem>
          <CompanyLink to="/clients/qatar">
            <CompanyLogo
              src="https://d21buns5ku92am.cloudfront.net/69647/images/433143-QR%20Logo%20Horizontal%20White-6a70c4-medium-1654772384.png"
              alt="Qatar Airways Logo"
            />
            Qatar Airways
          </CompanyLink>
        </CompanyItem>
      </CompanyList>
    </ClientsPage>
  );
}

export default Clients;
