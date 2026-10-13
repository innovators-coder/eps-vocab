# EPS-TOPIK Vocabulary Notebook

## Pag-add ng vocab (vocab.json lang ang ie-edit)

Format ng bawat category: `["Category name", [["한국어","English","romanization"], ...]]`

- `"default"` = lumalabas na agad sa bagong install ng app.
- `"packs"` = lumalabas sa Manage → Starter packs (may "＋ Add" button; hindi ginagalaw ang progress mo).

Para sa dagdag na salita, mag-add ng bagong linya sa `"packs"` (o dagdag na `["한국어","English","romanization"]` sa loob ng existing na category).
Tandaan: may kuwit (`,`) sa dulo ng bawat linya maliban sa huli.

Pagkatapos mag-commit sa GitHub, buksan ang app online at i-refresh. Pagkatapos, pindutin ang "＋ Add" sa Manage → Starter packs.

Kapag nagbago ang `index.html` o ibang file (hindi vocab.json), palitan ang `eps-topik-vX` sa unang linya ng `sw.js`.
