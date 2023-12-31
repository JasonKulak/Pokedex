<h3>Type:</h3>
    <ul>
        <% for (let i = 0; i < pokemon.type.length; i++){ %>

        <li><%= pokemon.type[i] %></li>
        <% } %>
    </ul>
    <h4>Stats:</h4>
    <ul>
        <li><%= " HP - " + pokemon.stats.hp %></li>
        <li><%= " Attack - " + pokemon.stats.attack  %></li>
        <li><%= " Defense - " + pokemon.stats.defense %></li>
    </ul>

