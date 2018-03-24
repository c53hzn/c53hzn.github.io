// # src / katex.js
// Copyright (c) 2017 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// function loadDisqus2() {
//   window.DISQUS.reset({
//     reload: true,
//     config() {
//       this.page.url = window.location.href;
//       this.page.title = document.title;
//     },
//   });
// }


export default function loadDisqus() {
  if (document.getElementById('disqus_thread')) {
    window.loadJSDeferred(document.getElementById('_disqusJS').rhef);
    var disq = new iDisqus('disqus_thread', {
        forum: 'houzhenni-com',
        api: 'https://37ed5962-3f77-41a6-bd8e-c7735322cebe.coding.io/api/login.php',
        site: 'https://www.houzhenni.com',
        mode: 1,
        timeout: 3000,
        init: true
    });
    disq.popular();
    disq.count();

    // if (window.DISQUS) {
    //   loadDisqus2();
    // } else {
    //   window.disqus_config = function disqusConfig() {
    //     this.page.url = window.location.href;
    //     this.page.title = document.title;
    //   };
    //   window.loadJSDeferred(document.getElementById('_disqusJS').rhef);
    // }
  }
}

loadDisqus();
