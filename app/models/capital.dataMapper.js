import Debug from 'debug';
import client from './client.js';
const debug = Debug('capital:datamapper:index');

export default class CapitalDataMapper {
  async getAll() {
    const preparedQuery = {
      text: 'SELECT * FROM cities',
    };
    const result = await client.query(preparedQuery);
    return result.rows;
  }
  async getOne(id) {
    const preparedQuery = {
      text: 'SELECT * FROM cities WHERE id = $1',
      values: [id],
    };
    const result = await client.query(preparedQuery);
    return result.rows;
  }
  async create(data) {
    if (!data.image) {
      data.image = 'assets/images/cities/default.png';
    }
    const preparedQuery = {
      text: 'INSERT INTO cities (name, country, latitude, longitude, population, language, currency, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      values: [
        data.name,
        data.country,
        +data.latitude,
        +data.longitude,
        +data.population,
        data.language,
        data.currency,
        data.image,
      ],
    };
    console.log(preparedQuery);
    const result = await client.query(preparedQuery);
    return result.rows;
  }
  async update(id, data) {
    const fields = Object.keys(data);
    const values = fields.map((field) => data[field]);
    const setAssignments = fields
      .map((field, i) => `${field} = $${i + 1}`)
      .join(', ');
    const text = `UPDATE cities SET ${setAssignments} WHERE id = $${
      fields.length + 1
    } RETURNING *`;

    const query = {
      text,
      values: [...values, id],
    };
    const result = await client.query(query);
    return result.rows;
  }

  async delete(id) {
    const preparedQuery = {
      text: 'DELETE FROM cities WHERE id = $1 RETURNING *',
      values: [id],
    };
    const result = await client.query(preparedQuery);
    return result.rows;
  }
}
