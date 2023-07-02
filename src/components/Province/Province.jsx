import "./Province.styles.scss";

const Province = ({ provinces }) => {
  return (
    <section>
      <div className="province">
        <h1 className="province__title">Province</h1>
        <p className="province__subtitle">Data Covid Berdasarkan Global</p>
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
              {provinces?.map((province, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td className="city">{province?.name || province?.kota}</td>
                  <td>
                    {province?.numbers?.confirmed +
                      province?.numbers?.recovered +
                      province?.numbers?.death || province?.kasus}
                  </td>
                  <td>{province?.numbers?.confirmed || province?.dirawat}</td>
                  <td>{province?.numbers?.recovered || province?.sembuh}</td>
                  <td>{province?.numbers?.death || province?.meninggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Province;
