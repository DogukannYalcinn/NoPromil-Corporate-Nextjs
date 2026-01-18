import MainNavbar from "@/components/MainNavbar";
import Image from "next/image";

export default function Page() {
  return (
      <div id="top" className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
        <MainNavbar />
        <main className="pt-16">
          {/* HERO */}
          <section className="relative">
            <div className="mx-auto max-w-6xl px-4 py-16">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
                <div className="grid items-center gap-10 md:grid-cols-2">
                  {/* Text */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Kesin. Taşınabilir. Sağduyulu.
                    </p>

                    <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                      Günlük Güven için Kişisel Alkol Analiz Cihazı
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                      Temiz tasarım, hızlı okumalar ve basit bir deneyim. Pratik tutun, güvenilir tutun.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                          href="https://www.trendyol.com/nopromil/alkolmetre-dijital-ve-tasinabilir-promil-olcum-cihazi-p-1079522446?boutiqueId=61&merchantId=158056"
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F27A1A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 hover:scale-x-95  active:brightness-95 group"
                      >
                        <span>Trendyol’da Satın Al</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                              d="M7 17L17 7M17 7H9M17 7V15"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                          href="#contact"
                          className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/15"
                      >
                        İletişim
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                      <Image
                          src="/content-1.png"
                          alt="NoPromil cihaz görseli"
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain"
                      />
                    </div>

                    {/* Optional subtle glow behind image */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(600px_circle_at_30%_30%,rgba(255,255,255,0.10),transparent_60%)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(700px_circle_at_80%_30%,rgba(255,255,255,0.06),transparent_50%)]"
            />
          </section>

          {/* PRODUCT */}
          <section id="product" className="scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 py-16">
              <div className="grid items-start gap-10 md:grid-cols-2">
                {/* Images */}
                <div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <Image
                        src="/device.png"
                        alt="PLS01 cihaz görseli"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-6"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { src: "/box-1.png", alt: "PLS01 kutulu görsel 1" },
                      { src: "/box-2.png", alt: "PLS01 kutulu görsel 2" },
                      { src: "/box-3.png", alt: "PLS01 kutulu görsel 3" },
                    ].map((img) => (
                        <div
                            key={img.src}
                            className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        >
                          <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes="(max-width: 768px) 33vw, 160px"
                              className="object-contain p-3"
                          />
                        </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Ürün Bilgisi
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    PLS01 Tüketici Alkol Test Cihazı
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-white/70">
                    NP-2302, geliştirdiğimiz yeni tip bir alkol test cihazıdır. Cihaz; gelişmiş
                    düz yüzeyli, yarı iletken alkol sensörü sayesinde yüksek hassasiyet ve
                    tekrarlanabilirliğe sahiptir. Arka aydınlatmalı LCD ekranı basit, net ve
                    kompakt bir kullanım sunar. Taşınabilir yapısı günlük kullanım için uygundur.
                  </p>

                  <h3 className="mt-6 text-lg font-semibold">Teknik Özellikler</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>• Gelişmiş yarı iletken (düz yüzeyli) alkol sensörü</li>
                    <li>• Hızlı yanıt ve yüksek doğruluk</li>
                    <li>• Güç tasarrufu sağlayan tasarım, düşük voltaj uyarısı</li>
                    <li>• Önceden ayarlanmış sınırın üzerindeki seviyeler için sesli uyarı</li>
                    <li>• Değiştirilebilir birimler: mg/L, g/L, %BAC, ‰BAC</li>
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="/manuals/pls01-kullanim-kilavuzu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                    >
                      Kullanma Kılavuzu (PDF)
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/15"
                    >
                      İletişim
                    </a>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-white/50">
                    Not: Ölçüm sonuçları ortam koşulları ve kullanım şekline göre değişebilir. Güvenlik
                    kararlarınız için resmi ölçüm/prosedürleri dikkate alınız.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* ABOUT */}
          <section id="about" className="scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 py-16">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Hakkımızda
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  NoPromil: Sade, güvenilir ve günlük kullanım için tasarlandı
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-6 text-white/70 md:text-base">
                  NoPromil, kişisel alkol ölçümünü daha anlaşılır ve daha erişilebilir hâle getirmek için yola çıktı.
                  Bugün tek bir ürünle başlıyoruz; çünkü odağımız net: bir işi iyi yapmak. “Quality over quantity”
                  yaklaşımıyla, gereksiz karmaşa yerine pratik kullanım ve tutarlı deneyim sunmayı hedefliyoruz.
                </p>

                <p className="mt-4 max-w-4xl text-sm leading-6 text-white/70 md:text-base">
                  Ürünümüz; taşınabilir formu, hızlı ölçüm deneyimi ve sade arayüzüyle günlük hayatta “peace of mind”
                  (iç rahatlığı) sağlamayı amaçlar. Aynı zamanda kullanıcıyı doğru kullanım konusunda bilgilendiren
                  dokümantasyon ve açık iletişim, NoPromil’in temel yaklaşımının bir parçasıdır.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-sm font-semibold">Net Odak</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Tek ürün, tek amaç: kullanıcı dostu bir kişisel ölçüm deneyimi. İlk günden itibaren “built to last”
                      (uzun ömürlü) yaklaşımıyla ilerliyoruz.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-sm font-semibold">Sade Tasarım</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Az ama doğru: okunabilir ekran, anlaşılır bildirimler ve günlük kullanımda zaman kazandıran akış.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-sm font-semibold">Şeffaf İletişim</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Kullanım kılavuzu, temel sorular ve destek kanallarıyla her adımda yanında olmayı hedefleriz.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm leading-6 text-white/70">
                    <span className="font-semibold text-white">Önemli Not:</span> Bu cihaz kişisel kullanım içindir.
                    Ölçüm sonuçları; kullanım şekli, ortam koşulları ve kullanıcı faktörlerine göre değişebilir.
                    Resmî/bağlayıcı kararlar için ilgili prosedür ve kaynakları esas almanızı öneririz.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* CONTACT */}
          <section id="contact" className="scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 py-16">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
                <p className="text-xs tracking-[0.2em] text-white/60">
                  İLETİŞİM
                </p>

                <div className="mt-3 grid gap-10 md:grid-cols-2">
                  {/* Left: Contact details */}
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      Size yardımcı olalım
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                      Ürünle ilgili sorularınız, kullanım desteği veya iş birliği talepleriniz için bizimle iletişime geçin.
                      Mesajınızı aldığımızda en kısa sürede dönüş yaparız. “Feel free to reach out.”
                    </p>

                    <div className="mt-8 space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="text-sm font-semibold">Adres</div>
                        <div className="mt-1 text-sm leading-6 text-white/70">
                          Kıza İş Mrk. A3 Blok<br />
                          No: 437/21<br />
                          Seyhan / Adana
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="text-sm font-semibold">Telefon</div>
                        <div className="mt-2 flex flex-col gap-2 text-sm text-white/70">
                          <a className="hover:text-white" href="tel:+903225020075">
                            +90 322 502 00 75
                          </a>
                          <a className="hover:text-white" href="tel:+905467757273">
                            +90 546 775 72 73
                          </a>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="text-sm font-semibold">E-posta</div>
                        <a
                            className="mt-2 block text-sm text-white/70 hover:text-white"
                            href="mailto:info@plasarf.com"
                        >
                          info@plasarf.com
                        </a>
                      </div>
                    </div>

                    <p className="mt-6 text-xs leading-5 text-white/50">
                      Not: Destek sürecini hızlandırmak için mesajınızda ürün modeli, sorunun kısa açıklaması ve mümkünse fotoğraf/video paylaşabilirsiniz.
                    </p>
                  </div>

                  {/* Right: Simple form */}
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                    <h3 className="text-lg font-semibold">Mesaj Gönderin</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Kısa bir not bırakın; dönüş yapalım.
                    </p>

                    <form className="mt-6 space-y-4">
                      <div>
                        <label className="text-xs text-white/60">Ad Soyad</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Adınız Soyadınız"
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-[color:var(--background)]/40 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/30 focus:border-white/20"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-white/60">E-posta</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="ornek@mail.com"
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-[color:var(--background)]/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-white/60">Konu</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Örn: Kullanım desteği / Ürün bilgisi"
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-[color:var(--background)]/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-white/60">Mesaj</label>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Mesajınızı yazın..."
                            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[color:var(--background)]/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20"
                        />
                      </div>

                      <button
                          type="button"
                          className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                      >
                        Mesajı Gönder
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* BLOG */}
          <section id="blog" className="scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 py-16">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Blog
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    Bilinçli kararlar için kısa okumalar
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                    Eğlence sonrası “just to be safe” (emin olmak için) küçük bir kontrol,
                    büyük riskleri önleyebilir. Aşağıdaki yazılar bilgilendirme amaçlıdır.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Eğlence biter, kontrol başlar",
                    tag: "Günlük Kullanım",
                    excerpt:
                        "Gece dışarı çıktığınızda dönüş planı net değilse, birkaç saniyelik ölçüm size yol haritası sunar. En doğru yaklaşım: Alkollüyseniz araç kullanmayın.",
                    bullets: ["Hızlı ölçüm rutini", "Daha bilinçli karar", "Güvenli dönüş planı"],
                    image: {
                      src: "/blog-1.jpeg",
                      alt: "Bir kişinin kişisel alkol analiz cihazı kullanması",
                      className: "object-cover",
                    },
                  },
                  {
                    title: "Yol kontrolünde sürprize yer yok",
                    tag: "Trafik Bilinci",
                    excerpt:
                        "Trafik kontrolü, gecenin bir anında planları değiştirebilir. Önceden kontrol etmek; zaman, stres ve olası yaptırımlar açısından fark yaratır.",
                    bullets: ["Kontrole hazırlıklı ol", "Risk alma, plan yap", "Daha sakin süreç"],
                    image: {
                      src: "/blog-2.png",
                      alt: "Trafik kontrolü sahnesi",
                      className: "object-cover",
                    },
                  },
                  {
                    title: "Bir karar, bütün geceyi değiştirebilir",
                    tag: "Sorumluluk",
                    excerpt:
                        "Kaza; yalnızca maddi değil, zaman, sağlık ve psikoloji açısından da ağır sonuçlar doğurabilir. “Better safe than sorry” (sonradan pişman olmaktansa önceden önlem).",
                    bullets: ["Kendin ve başkaları için", "Sıfır risk yaklaşımı", "Güvenli alternatifler"],
                    image: {
                      src: "/blog-3.png",
                      alt: "Kaza sonrası sahne",
                      className: "object-cover",
                    },
                  },
                ].map((post) => (
                    <article
                        key={post.title}
                        className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                    >
                      <div className="relative aspect-[3/4] w-full border-b border-white/10 bg-black/20">
                        <Image
                            src={post.image.src}
                            alt={post.image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={post.image.className}
                        />
                      </div>

                      <div className="flex h-full flex-col p-6">
                        <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {post.tag}
              </span>
                        </div>

                        <h3 className="mt-4 text-lg font-semibold leading-snug">
                          {post.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-white/70">
                          {post.excerpt}
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-white/70">
                          {post.bullets.map((b) => (
                              <li key={b}>• {b}</li>
                          ))}
                        </ul>

                        {/*<div className="mt-auto pt-6">*/}
                        {/*  <a*/}
                        {/*      href="#contact"*/}
                        {/*      className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"*/}
                        {/*  >*/}
                        {/*    Devamını Oku*/}
                        {/*    <span aria-hidden="true">→</span>*/}
                        {/*  </a>*/}
                        {/*</div>*/}
                      </div>
                    </article>
                ))}
              </div>

              <p className="mt-8 text-xs leading-5 text-white/50">
                Not: İçerikler bilgilendirme amaçlıdır. Ölçümler ortam koşulları ve kullanım şekline göre değişebilir.
                Resmî kararlar için ilgili mevzuat ve prosedürleri dikkate alın.
              </p>
            </div>
          </section>


          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-8">
              <div className="flex flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
                <div>
                  © {new Date().getFullYear()} NoPromil. Tüm hakları saklıdır.
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <a href="#product" className="hover:text-white/80 transition">Ürün</a>
                  <a href="#about" className="hover:text-white/80 transition">Hakkımızda</a>
                  <a href="#blog" className="hover:text-white/80 transition">Blog</a>
                  <a href="#contact" className="hover:text-white/80 transition">İletişim</a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
  );
}
