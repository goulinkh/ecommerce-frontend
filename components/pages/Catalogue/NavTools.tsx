import ActiveLink from 'components/ActiveLink';
import { Catalogue } from 'utils/types';

type props = { allCatalogues: Catalogue[] };
const NavTools: React.FC<props> = ({ allCatalogues }) => {
  const formatCatalogueName = (name) =>
    `${name[0].toUpperCase()}${name.substr(1)}`;

  return (
    <div className="w-44 flex flex-col space-y-10">
      {/* Catalogue section */}
      <SubSectionContainer>
        <SubSectionTitle text="Catalogues" />
        <SubSectionItemContainer>
          {allCatalogues.map((c, i) => (
            <ActiveLink
              key={i}
              href={`/catalogue/${c.id}`}
              regex={new RegExp(`/catalogue/${c.id}`)}
              activeClassName="text-blue-400"
            >
              {formatCatalogueName(c.name)}
            </ActiveLink>
          ))}
        </SubSectionItemContainer>
      </SubSectionContainer>
      {/* Price slider section */}
      <SubSectionContainer>
        <SubSectionTitle text="Prix" />
        {/* TODO: make price slider */}
        <p>TODO: slider de filtrage de prix</p>
      </SubSectionContainer>
      {/* Materials section */}
      <SubSectionContainer>
        <SubSectionTitle text="Matériels" />
        <SubSectionItemContainer>
          <span>Tissu</span>
          <span>Bois</span>
          <span>Cuir</span>
          <span>Verre</span>
          <span>Pastique éco</span>
        </SubSectionItemContainer>
      </SubSectionContainer>
    </div>
  );
};

export default NavTools;

const SubSectionContainer = ({ children }) => (
  <div className="flex flex-col space-y-5">{children}</div>
);
const SubSectionTitle = ({ text }) => (
  <h2 className="font-bold text-xl">{text}</h2>
);

const SubSectionItemContainer = ({ children }) => (
  <div className="flex flex-col space-y-3">{children}</div>
);
