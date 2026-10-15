# EPS-TOPIK Vocabulary Notebook

## Pag-add ng vocab (vocab.json lang ang ie-edit)

Format ng bawat category: `["Category name", [["한국어","English","romanization"], ...]]`

- `"default"` = lumalabas na agad sa bagong install ng app.
- `"packs"` = lumalabas sa Manage → Starter packs (may "＋ Add" button; hindi ginagalaw ang progress mo).

Para sa dagdag na salita, mag-add ng bagong linya sa `"packs"` (o dagdag na `["한국어","English","romanization"]` sa loob ng existing na category).
Tandaan: may kuwit (`,`) sa dulo ng bawat linya maliban sa huli.

Pagkatapos mag-commit sa GitHub, buksan ang app online at i-refresh. Pagkatapos, pindutin ang "＋ Add" sa Manage → Starter packs.

Kapag nagbago ang `index.html` o ibang file (hindi vocab.json), palitan ang `eps-topik-vX` sa unang linya ng `sw.js`.

## Exam tab (Reading / Listening)

Ang mga tanong ay nasa `practice.json`; ang mga larawan ay nasa folder na `img/`.

- Bawat section (`reading`, `listening`) ay may `time` (segundo bawat tanong) at listahan ng `levels`. Bawat level ay may `title` at `questions`.
- Reading na tanong: `{"no":201,"q":"가: ...\n나: ____...","opts":[["약","medicine"],...],"a":3,"why":"..."}`. Pwedeng may `"img":"img/read-3.jpg"` para sa picture question.
- Listening na tanong: `{"q":"이름이 뭐예요?","tr":"What's your name?","opts":[["마이클이에요.","I'm Michael."],...],"a":1}`. Babasahin ng text-to-speech ang "일 번" + tanong, dalawang beses; ang mga choices lang ang nakikita.
- `"a"` = index ng tamang sagot (0 = una). `"pass"` sa taas ng file = passing rate (0.6 = 60%).

Kapag nagdagdag ng bagong larawan, idagdag ang path nito sa `FILES` sa `sw.js` at palitan ang `eps-topik-vX`.
