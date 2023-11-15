const ProgrammingLanguageContent = () => {
  return `
    <div class="flex-column">
      <article>
        <h2>Pengertian Bahasa Pemrograman</h2>
        <p>
          Bahasa pemrograman adalah sebuah instruksi standar untuk memerintah
          komputer agar menjalankan fungsi tertentu. Bahasa pemrograman ini
          merupakan suatu himpunan dari aturan sintaksis dan semantik yang
          dipakai untuk mendefinisikan tata olah (program). Bahasa ini
          memungkinkan seorang penata olah (programmer) dapat menentukan secara
          persis data mana yang akan diolah oleh komputer, bagaimana data ini
          akan disimpan/diteruskan, dan jenis langkah apa yang secara persis
          akan diambil dalam berbagai situasi.
        </p>
      </article>

      <article>
        <h2>Fungsi</h2>
        <p>
          Fungsi bahasa pemrograman yaitu memerintah komputer untuk mengolah
          data sesuai dengan alur berpikir yang kita inginkan. Keluaran dari
          bahasa pemrograman tersebut berupa tata olah/aplikasi. Contohnya
          adalah tata olah yang digunakan oleh kasir di mal-mal atau pasar raya,
          penggunaan lampu lalu lintas di jalan raya, dll.
        </p>

        <p>
          Bahasa pemrograman yang dikenal antara lain seperti Java, Visual
          Basic, C++, C, Cobol, PHP, .Net, dan ratusan bahasa lainnya. Namun
          tentu saja kebutuhan bahasa ini harus disesuaikan dengan fungsi dan
          perangkat yang menggunakannya.
        </p>
        <p>Secara umum bahasa pemrograman terbagi menjadi 4 kelompok, yaitu:</p>

        <ol>
          <li>
            Object Oriented Language (Bahasa Bertuju Objek): Visual dBase,
            Visual FoxPro, Delphi, Visual C
          </li>
          <li>
            High Level Language (Bahasa Aras Tinggi): seperti Pascal dan Basic
          </li>
          <li>
            Middle Level Language (Bahasa Aras Tengah): seperti bahasa C, dan
          </li>
          <li>
            Low Level Language (Bahasa Aras Rendah): seperti bahasa Assembly
          </li>
        </ol>
      </article>
    </div>

    <aside>
      <figure class="aside-image">
        <img src="./assets/code.png" alt="Code" />
        <figcaption>
          Kode sederhana yang ditulis menggunakan bahasa pemrograman Javascript.
          Saat Kode dijalankan, maka pada console browser akan menampilkan
          "Hello, world"
        </figcaption>
      </figure>
    </aside>

    <article>
      <h2>Tingkatan</h2>
      <ol>
        <li>
          <strong>Bahasa tingkat tinggi</strong>
          <p>
            Bahasa pemrograman masuk tingkat ini karena bahasa tersebut
            mendekati bahasa manusia. Contohnya bahasa Basic, Visual Basic,
            Pascal, Java, PHP.
          </p>
        </li>
        <li>
          <strong>Bahasa tingkat menengah</strong>
          <p>
            Disebut tingkat menengah karena bisa masuk ke dalam bahasa tingkat
            tinggi maupun rendah. Contohnya bahasa C.
          </p>
        </li>
        <li>
          <strong>Bahasa tingkat rendah</strong>
          <p>
            bahasa pemrograman masuk tingkat ini karena bahasanya masih jauh
            dari bahasa manusia. Contohnya bahasa Assembly.
          </p>
        </li>
      </ol>
    </article>

    <article>
      <h2>Proses Pembuatan Program</h2>
      <p>
        Proses pembuatan program yaitu kita menulis kode sumber pada teks editor
        misalnya Visual Studio Code kemudian mengubahnya menjadi bahasa mesin
        yang bisa dieksekusi oleh CPU. Proses pengubahan kode sumber (source
        code) menjadi bahasa mesin (machine language) ini terdiri dari dua macam
        yaitu kompilasi dan interpretasi.
      </p>
      <br />
      <ol>
        <li>
          <strong>Kompilasi</strong>
          <p>
            Dalam proses kompilasi semua kode sumber dibaca terlebih dahulu dan
            jika tidak ada kesalahan dalam menulis program maka akan dibentuk
            kode mesinnya sehingga program bisa dijalankan. Program yang
            melakukan tugas ini disebut Compiler. Program hasil kompilasi akan
            berbentuk executable. Program bisa langsung dijalankan tanpa harus
            memiliki Compiler di komputer yang menjalankan program tersebut.
            Bahasa yang menggunakan teknik kompilasi misalnya bahasa C, C++,
            Pascal, Assembly dan masih banyak lagi.
          </p>
        </li>
        <li>
          <strong>Interpretasi</strong>
          <p>
            Bahasa yang menggunakan teknik interpretasi akan membaca kode sumber
            perbaris dan dieksekusi perbaris. Jika ditemukan kesalahan dalam
            penulisan program maka di baris kesalahan itulah program akan
            dihentikan. Program yang melakukan tugas ini disebut Interpreter.
            Pada teknik interpretasi tidak ada akan dihasilkan program
            standalone, artinya untuk menjalankan program kita harus mempunyai
            kode sumbernya sekaligus interpreter program tersebut. Bahasa yang
            menggunakan teknik interpretasi misalnya bahasa Perl, Python, Ruby
            dan masih banyak lagi.
          </p>
        </li>
        <li>
          <strong>Kompilasi sekaligus interpretasi</strong>
          <p>
            Ada juga bahasa pemrograman yang menghasilkan programnya dengan
            teknik kompilasi sekaligus interpretasi. Misalnya bahasa java. Dalam
            pembuatan program java kode sumber diubah menjadi bytecode. Meskipun
            tampak seperti bahasa mesin namun ini bukanlah bahasa mesin dan
            tidak executable. Untuk menjalankan bytecode tersebut kita
            membutuhkan Java Runtime Environment (JRE) yang bertugas sebagai
            interpreter sehingga menghasilkan program dari bytecode tersebut.
          </p>
        </li>
      </ol>
    </article>
  `;
};

export default ProgrammingLanguageContent;
