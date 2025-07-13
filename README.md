<body style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">

  <header style="background-color: #004080; color: white; padding: 15px 20px; border-radius: 10px;">
    <h1 style="margin: 0;">Gestor de Biblioteca 📚</h1>
    <p style="margin: 5px 0 0;">Administra tus libros, autores y categorías fácilmente</p>
  </header>

  <section style="margin-top: 30px;">
    <h2>🔍 Buscar libros</h2>
    <input type="text" placeholder="Título del libro..." style="padding: 8px; width: 300px; border-radius: 6px; border: 1px solid #ccc;">
    <button style="padding: 8px 12px; margin-left: 8px; background-color: #004080; color: white; border: none; border-radius: 6px;">Buscar</button>
  </section>

  <section style="margin-top: 40px;">
    <h2>📘 Lista de Libros</h2>
    <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 10px; overflow: hidden;">
      <thead style="background-color: #004080; color: white;">
        <tr>
          <th style="padding: 10px;">Título</th>
          <th style="padding: 10px;">Autor</th>
          <th style="padding: 10px;">Categoría</th>
          <th style="padding: 10px;">Año</th>
          <th style="padding: 10px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px;">Cien años de soledad</td>
          <td style="padding: 10px;">Gabriel García Márquez</td>
          <td style="padding: 10px;">Realismo mágico</td>
          <td style="padding: 10px;">1967</td>
          <td style="padding: 10px;">
            <button style="background-color: #e67e22; color: white; border: none; padding: 6px 10px; border-radius: 5px;">Editar</button>
            <button style="background-color: #c0392b; color: white; border: none; padding: 6px 10px; border-radius: 5px; margin-left: 5px;">Eliminar</button>
          </td>
        </tr>
        <!-- Más filas dinámicas -->
      </tbody>
    </table>
  </section>

  <section style="margin-top: 40px;">
    <h2>➕ Agregar nuevo libro</h2>
    <form style="background-color: white; padding: 20px; border-radius: 10px; max-width: 600px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <label>Título:</label><br>
      <input type="text" style="width: 100%; padding: 8px; margin-bottom: 10px;"><br>
      
      <label>Autor:</label><br>
      <select style="width: 100%; padding: 8px; margin-bottom: 10px;">
        <option>-- Seleccionar autor --</option>
      </select><br>

      <label>Categoría:</label><br>
      <select style="width: 100%; padding: 8px; margin-bottom: 10px;">
        <option>-- Seleccionar categoría --</option>
      </select><br>

      <label>Año:</label><br>
      <input type="number" style="width: 100%; padding: 8px; margin-bottom: 15px;"><br>

      <button type="submit" style="background-color: #27ae60; color: white; padding: 10px 20px; border: none; border-radius: 6px;">Guardar libro</button>
    </form>
  </section>

</body>
