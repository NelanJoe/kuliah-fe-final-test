import { StyledProvince } from "./StyledProvince";

const Provinces = ({ provinces }) => {
  return (
    <StyledProvince>
      <div className="province">
        <h1>Province</h1>
        <p>Data Covid Berdasarkan Global</p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kota</th>
                <th>Kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {provinces?.map((province, index) => {
                const confirmed = province?.numbers?.confirmed;
                const recovered = province?.numbers?.recovered;
                const death = province?.numbers?.death;

                const totalCase = confirmed + recovered + death;

                return (
                  <tr key={index}>
                    <td>{(index += 1)}</td>
                    <td className="city">{province?.name || province?.kota}</td>
                    <td>{totalCase || province?.kasus}</td>
                    <td>{recovered || province?.sembuh}</td>
                    <td>{death || province?.meninggal}</td>
                    <td>{confirmed || province?.dirawat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </StyledProvince>
  );
};

export default Provinces;
