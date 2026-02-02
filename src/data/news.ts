// Haber verilerini yöneten merkezi data dosyası
// TR ve EN başlık/özet alanları ile iki dilli yapı

export type NewsLocaleContent = {
  title: string;
  excerpt: string;
  body: string[]; // Detay sayfasında gösterilecek paragraflar
};

export type NewsSource = {
  label: string;
  url: string;
};

export type NewsItem = {
  id: string;
  slug: string;
  date: string; // ISO format
  category: string;
  externalUrl?: string; // Kaynak sitedeki tam haber linki
  sources?: NewsSource[]; // Haber hazırlanırken referans alınan resmi/uzman kaynaklar
  tr: NewsLocaleContent;
  en: NewsLocaleContent;
};

// Not: Yeni haber eklemek için aşağıdaki diziye yeni bir obje eklemeniz yeterli.
// id: benzersiz bir değer,
// slug: URL dostu kısa isim,
// date: "YYYY-MM-DD" formatında tarih,
// category: "Muhasebe Haberleri" gibi kısa etiket,
// externalUrl: (opsiyonel) orijinal haber linki.

export const newsItems: NewsItem[] = [
  {
    id: 'anonim-sirketler',
    slug: 'anonim-sirketler-hakkinda-temel-bilgiler-ve-kurulus-esaslari',
    date: '2026-01-31',
    category: 'Şirketler Hukuku',
    tr: {
      title: 'Anonim Şirketler',
      excerpt:
        'Anonim şirket, sermayesi belirli ve paylara bölünmüş olan, borçlarından yalnızca malvarlığıyla sorumlu bulunan şirkettir. Ticaret unvanı ve kuruluş esasları hakkında detaylar...',
      body: [
        'Anonim şirket, sermayesi belirli ve paylara bölünmüş olan, borçlarından yalnızca malvarlığıyla sorumlu bulunan şirkettir (TTK m. 329). İşletme konusu ile şirket türünü gösteren ibareler Türkçe olmak kaydıyla ticaret unvanı serbestçe belirlenebilir (Ticaret Unvanları Hakkında Tebliğ m. 4/1). Ticaret unvanında; anonim şirket ibaresinin bulunması ve faaliyet konusunun gösterilmesi zorunludur (TTK m. 43).',
        'Asgari sermaye tutarı 250.000 Türk Lirasıdır. Kayıtlı sermaye sistemini kabul eden halka açık olmayan anonim şirketler açısından başlangıç sermayesi ise en az 500.000 Türk Lirası olabilir (TTK m. 332). Nakdi olarak taahhüt edilen payların itibari değerlerinin en az dörtte birinin tescilden önce ödenmesi zorunludur. Geri kalan miktar şirketin tescilini izleyen 24 ay içerisinde ödenir (TTK m. 344). Ödeme takvimi şirket esas sözleşmesinde düzenlenebileceği gibi, yönetim kurulunca da belirlenebilir (TTK m. 481).',
        'Belirli faaliyet konularını yürüten anonim şirketler ile bilanço aktif toplamı, yıllık net satış hasılatı, çalışan sayısına göre belirlenen ölçütlerin eşik değerlerini aşan anonim şirketler bağımsız denetime tabidir (TTK m. 397 vd.).',
      ],
    },
    en: {
      title: 'Joint Stock Companies (Anonim Şirketler)',
      excerpt:
        'A joint stock company is a company whose capital is fixed and divided into shares, and which is liable for its debts only with its assets. Details on trade name and incorporation principles...',
      body: [
        'Anonim şirket, sermayesi belirli ve paylara bölünmüş olan, borçlarından yalnızca malvarlığıyla sorumlu bulunan şirkettir (TTK m. 329). İşletme konusu ile şirket türünü gösteren ibareler Türkçe olmak kaydıyla ticaret unvanı serbestçe belirlenebilir (Ticaret Unvanları Hakkında Tebliğ m. 4/1). Ticaret unvanında; anonim şirket ibaresinin bulunması ve faaliyet konusunun gösterilmesi zorunludur (TTK m. 43).',
        'Asgari sermaye tutarı 250.000 Türk Lirasıdır. Kayıtlı sermaye sistemini kabul eden halka açık olmayan anonim şirketler açısından başlangıç sermayesi ise en az 500.000 Türk Lirası olabilir (TTK m. 332). Nakdi olarak taahhüt edilen payların itibari değerlerinin en az dörtte birinin tescilden önce ödenmesi zorunludur. Geri kalan miktar şirketin tescilini izleyen 24 ay içerisinde ödenir (TTK m. 344). Ödeme takvimi şirket esas sözleşmesinde düzenlenebileceği gibi, yönetim kurulunca da belirlenebilir (TTK m. 481).',
        'Belirli faaliyet konularını yürüten anonim şirketler ile bilanço aktif toplamı, yıllık net satış hasılatı, çalışan sayısına göre belirlenen ölçütlerin eşik değerlerini aşan anonim şirketler bağımsız denetime tabidir (TTK m. 397 vd.).',
      ],
    },
  },
  {
    id: 'limited-sirketler',
    slug: 'limited-sirketler-kurulus-ve-ortaklik-yapisina-dair-esaslar',
    date: '2026-01-31',
    category: 'Şirketler Hukuku',
    tr: {
      title: 'Limited Şirketler',
      excerpt:
        'Limited şirket, sermayesi belirli ve paylara bölünmüş olan ve borçlarından yalnızca malvarlığıyla sorumlu olan şirkettir. Ortakların sorumluluğu ve sermaye yapısı hakkında bilinmesi gerekenler...',
      body: [
        'Limited şirket, sermayesi belirli ve paylara bölünmüş olan ve borçlarından yalnızca malvarlığıyla sorumlu olan şirkettir (TTK m. 573/1).',
        'Ortaklar, şirket borçlarından sorumlu olmayıp, sadece taahhüt ettikleri esas sermaye paylarını ödemekle ve şirket sözleşmesinde öngörülen ek ödeme ve yan edim yükümlülüklerini yerine getirmekle yükümlüdürler (TTK m. 573/2).',
        'Tek ortaklı limited şirket kurulabilir. Ancak ortakların sayısı elliyi aşamaz (TTK m. 574/1). Limited şirket ortakları gerçek kişi veya tüzel kişi olabilir.',
        'Limited şirketin esas sermayesi en az 50.000 Türk Lirası olup; esas sermaye paylarının itibarî değerleri en az yirmibeş Türk Lirası veya katları olarak belirlenebilir (TTK m. 580, 583/1). Nakdi olarak getirilen sermayenin tamamının şirketin tescilinden sonraki yirmi dört ay içinde ödenmesi mümkündür (TTK m. 585). Ödeme takvimi şirket sözleşmesinde düzenlenebileceği gibi, müdürler tarafından da belirlenebilir (TTK m. 585, 481).',
        'İşletme konusu ile şirket türünü gösteren ibareler Türkçe olmak kaydıyla ticaret unvanı serbestçe belirlenebilir (Ticaret Unvanları Hakkında Tebliğ m. 4/1). Ticaret unvanında; limited şirket ibaresinin bulunması ve faaliyet konusunun gösterilmesi zorunludur (TTK m. 43).',
      ],
    },
    en: {
      title: 'Limited Liability Companies (Limited Şirketler)',
      excerpt:
        'A limited liability company is a company whose capital is fixed and divided into shares and is liable for its debts only with its assets. What you need to know about partner liability and capital structure...',
      body: [
        'Limited şirket, sermayesi belirli ve paylara bölünmüş olan ve borçlarından yalnızca malvarlığıyla sorumlu olan şirkettir (TTK m. 573/1).',
        'Ortaklar, şirket borçlarından sorumlu olmayıp, sadece taahhüt ettikleri esas sermaye paylarını ödemekle ve şirket sözleşmesinde öngörülen ek ödeme ve yan edim yükümlülüklerini yerine getirmekle yükümlüdürler (TTK m. 573/2).',
        'Tek ortaklı limited şirket kurulabilir. Ancak ortakların sayısı elliyi aşamaz (TTK m. 574/1). Limited şirket ortakları gerçek kişi veya tüzel kişi olabilir.',
        'Limited şirketin esas sermayesi en az 50.000 Türk Lirası olup; esas sermaye paylarının itibarî değerleri en az yirmibeş Türk Lirası veya katları olarak belirlenebilir (TTK m. 580, 583/1). Nakdi olarak getirilen sermayenin tamamının şirketin tescilinden sonraki yirmi dört ay içinde ödenmesi mümkündür (TTK m. 585). Ödeme takvimi şirket sözleşmesinde düzenlenebileceği gibi, müdürler tarafından da belirlenebilir (TTK m. 585, 481).',
        'İşletme konusu ile şirket türünü gösteren ibareler Türkçe olmak kaydıyla ticaret unvanı serbestçe belirlenebilir (Ticaret Unvanları Hakkında Tebliğ m. 4/1). Ticaret unvanında; limited şirket ibaresinin bulunması ve faaliyet konusunun gösterilmesi zorunludur (TTK m. 43).',
      ],
    },
  },
  {
    id: 'vergi-denetim-kurulu-sahte-fatura',
    slug: 'vergi-denetim-kurulundan-kritik-duzenleme-bilmeden-sahte-fatura-savunmasi-artik-gecerli-degil',
    date: '2025-09-19',
    category: 'Muhasebe Haberleri',
    externalUrl:
      'https://muhasebece.com/vergi-denetim-kurulundan-kritik-duzenleme-bilmeden-sahte-fatura-savunmasi-artik-gecerli-degil/',
    sources: [
      {
        label:
          'Hazine ve Maliye Bakanlığı – Sahte Belgeyle Mücadele Stratejisi ve KURGAN Rehberi (Vergi Denetim Kurulu, PDF)',
        url: 'https://ms.hmb.gov.tr/uploads/sites/17/2025/10/Sahte-Belgeyle-Mucadele-Stratejisi-ve-KURGAN-Rehberi-29542a682ab0a437.pdf',
      },
      {
        label:
          'Hazine ve Maliye Bakanlığı – Sahte ve Muhteviyatı İtibarıyla Yanıltıcı Belgeyle Mücadele Rehberi (Vergi Denetim Kurulu, PDF)',
        url: 'https://ms.hmb.gov.tr/uploads/sites/8/2024/01/2Sahte-ve-Muhteviyati-Itibariyla-Yaniltici-Belgeyle-Mucadele-2022-1-2.pdf',
      },
    ],
    tr: {
      title:
        'Vergi Denetim Kurulu’ndan kritik düzenleme: "Bilmeden sahte fatura" savunması artık geçerli değil',
      excerpt:
        '1 Ekim 2025 itibarıyla sahte veya muhteviyatı itibarıyla yanıltıcı belge kullanan mükellefler için "haberim yoktu" savunması fiilen geçersiz hale geliyor. İşletmelerin tedarikçi seçimi ve belge kontrol süreçlerini yeniden kurgulaması gerekiyor.',
      body: [
        'Vergi Denetim Kurulu, sahte veya muhteviyatı itibarıyla yanıltıcı belge (naylon fatura) kullanımını azaltmak için denetim yaklaşımını sertleştiriyor. Yeni uygulamayla birlikte, mükellefin "farkında değildim" şeklindeki savunması tek başına bir koruma kalkanı olmaktan çıkıyor ve incelemelerde daha çok fiili kontrol yükümlülüğüne bakılıyor.',
        'Buna göre, tedarikçi seçiminde asgari bir özen göstermemiş, vergi dairesi veya diğer resmi kanallardan basit sorgulamaları dahi yapmamış işletmeler, sahte belgeyi bilmeden de kullansa, ağır tarhiyat ve cezalarla karşılaşabiliyor. Özellikle kısa süre önce kurulmuş, ciroya oranla olağanüstü yüksek fatura kesen veya adres/beyanname geçmişi sorunlu firmalarla çalışırken dikkatli olunması gerekiyor.',
        'Riskli tedarikçi uyarısı alan işletmelerin, bu bildirimi ciddiye alarak hem geçmiş işlemleri gözden geçirmesi hem de aynı firmayla çalışmaya devam edip etmeyeceğine dair yazılı bir değerlendirme yapması bekleniyor. Fatura iptali, karşı tarafla mutabakat, mal ve hizmetin fiilen alındığını ispatlayan sözleşme, irsaliye, taşıma belgesi ve ödeme kayıtları bu aşamada kritik önem taşıyor.',
        'Uygulamanın bir diğer sonucu da iç kontrol süreçlerinin güncellenmesi. Pek çok şirket, tedarikçi kabul prosedürlerine vergi dairesi mükellefiyet sorgusu, faaliyet kodu kontrolü, ortaklık yapısı ve önceki vergi incelemelerine ilişkin kısa bir "background check" ekliyor. Böylece hem ceza riskleri azaltılıyor hem de yönetim kurullarına savunulabilir bir karar süreci sunuluyor.',
        'Özetle, yeni yaklaşım sahte faturaya karşı pasif savunma dönemini kapatıp, işletmelere aktif bir risk yönetimi sorumluluğu yüklüyor. Mali müşavirle birlikte hazırlanacak yazılı tedarikçi politikası ve düzenli kontrol listeleri, ileride doğabilecek vergi incelemelerinde en güçlü dayanaklardan biri haline gelecek.',
      ],
    },
    en: {
      title:
        'Critical change from the Tax Inspection Board: The “I did not know it was a fake invoice” defence is no longer valid',
      excerpt:
        'As of 1 October 2025, taxpayers who use fake or misleading invoices can no longer rely on the argument that they were unaware. Companies are expected to redesign their supplier due diligence and document controls.',
      body: [
        'The Tax Inspection Board is tightening its approach against fake or misleading invoices. Under the new practice, the simple claim of “I did not know” will no longer be seen as sufficient defence; instead, auditors will look at whether the taxpayer exercised a reasonable level of control over its suppliers and documents.',
        'Businesses that fail to run basic background checks on high‑risk suppliers – such as tax office registration, filing history or unusual turnover patterns – may face heavy assessments even if they did not intentionally participate in fraud. This is particularly relevant for recently incorporated entities issuing large volumes of invoices in a short period of time.',
        'If a company receives a risk alert about one of its suppliers, it is expected to review past transactions, reconsider the commercial relationship and document its evaluation. Contract files, delivery notes, transportation records and proof of payment become essential pieces of evidence in such reviews.',
        'Many organisations are therefore updating their internal control frameworks, adding mandatory tax checks and red‑flag criteria to supplier onboarding procedures. In the long run, having a written vendor risk policy agreed with the accountant will be one of the strongest safeguards during inspections.',
        'In short, the new regime shifts the responsibility towards proactive risk management rather than passive defence. Companies that invest in systematic controls today will be better positioned against both financial penalties and reputational damage tomorrow.',
      ],
    },
  },
  {
    id: 'basit-usul-kalkiyor-2026',
    slug: '2026da-basit-usul-kalkiyor-esnaflar-neler-yapmali',
    date: '2025-09-17',
    category: 'Muhasebe Haberleri',
    externalUrl: 'https://muhasebece.com/2026da-basit-usul-kalkiyor-esnaflar-neler-yapmali/',
    sources: [
      {
        label:
          'Resmî Gazete – Basit usulde tespit olunan kazançlarda gelir vergisi sınırları (26.05.2022 tarihli Tebliğ)',
        url: 'https://www.resmigazete.gov.tr/eskiler/2022/05/20220526-4.htm',
      },
      {
        label:
          'Resmî Gazete – 2024 yılında basit usul şartlarına ilişkin gelir vergisi genel tebliği (30.12.2023 tarihli Tebliğ)',
        url: 'https://www.resmigazete.gov.tr/eskiler/2023/12/20231230M2-12.pdf',
      },
    ],
    tr: {
      title: '2026’da basit usul kalkıyor: Esnaflar neler yapmalı?',
      excerpt:
        'Büyükşehirlerde basit usulde vergilendirme sona ererken, birçok esnaf gerçek usule geçmek zorunda kalacak. Karardan etkilenecek sektörler, geçiş takvimi ve uyum sürecinde dikkat edilmesi gereken adımlar öne çıkıyor.',
      body: [
        'Basit usulde vergilendirme, küçük esnafa defter tutma ve beyanname yükünü hafifleten özel bir rejimdi. Yeni düzenlemelerle özellikle büyükşehirlerde bu imkan kademeli olarak ortadan kalkıyor ve esnafın önemli bir kısmı gerçek usule geçmek zorunda kalıyor.',
        'Gerçek usule geçiş; daha detaylı kayıt düzeni, düzenli KDV ve geçici vergi beyannameleri, banka hareketlerinin daha sıkı takibi gibi yeni sorumluluklar getiriyor. Bu nedenle esnafın, mali müşaviriyle birlikte nakit akışını, kârlılık yapısını ve fiyatlandırma politikasını yeniden gözden geçirmesi önem taşıyor.',
      ],
    },
    en: {
      title: 'A new era for small taxpayers: Simplified taxation ends in 2026',
      excerpt:
        'Simplified taxation will be phased out in metropolitan areas, forcing many small businesses into the standard regime. The update highlights which sectors are affected, the transition timeline and key compliance actions.',
      body: [
        'The simplified taxation regime used to ease the compliance burden for small businesses by offering lighter bookkeeping and filing requirements. With the latest changes, this option will gradually disappear in metropolitan areas and a large portion of small taxpayers will move into the standard regime.',
        'Transitioning to the regular scheme means more detailed bookkeeping, recurring VAT and provisional tax returns and closer monitoring of bank transactions. Business owners should therefore reassess their pricing, profitability and cash‑flow plans together with their accountant.',
      ],
    },
  },
  {
    id: 'yurtdisina-yazilim-hizmeti-vergi-istisnasi-2025',
    slug: '2025-yurtdisina-yazilim-hizmeti-sunanlar-icin-vergi-istisna-rehberi-bilmeniz-gereken-7-stratejik-nokta',
    date: '2025-08-05',
    category: 'Genel, Makaleler, Muhasebe Haberleri',
    externalUrl:
      'https://muhasebece.com/2025-yurtdisina-yazilim-hizmeti-sunanlar-icin-vergi-istisna-rehberi-bilmeniz-gereken-7-stratejik-nokta/',
    sources: [
      {
        label:
          'Resmî Gazete – 5520 sayılı Kurumlar Vergisi Kanunu ve ilgili kanunlarda değişiklik yapan Kanun (yurt dışı hizmet kazanç istisnası hükümleri)',
        url: 'https://www.resmigazete.gov.tr/eskiler/2016/10/20161002-5.htm',
      },
      {
        label:
          'Resmî Gazete – Hizmet ihracatı kazançlarına ilişkin gelir vergisi istisnası açıklamaları (Gelir Vergisi Genel Tebliği)',
        url: 'https://www.resmigazete.gov.tr/eskiler/2021/04/20210430-8.htm',
      },
    ],
    tr: {
      title:
        '2025 yurtdışına yazılım hizmeti sunanlar için vergi istisna rehberi: 7 stratejik nokta',
      excerpt:
        'Yazılım, tasarım ve teknoloji ihracatı yapan Türk şirketleri için %80’e varan vergi istisnası imkânı bulunuyor. Ancak bu avantajlardan yararlanmak için sözleşme, fatura ve fiili hizmet ifası gibi kritik adımların mevzuata tam uyumlu yürütülmesi şart.',
      body: [
        'Yurtdışına yazılım ve teknoloji hizmeti satan şirketler için kurum kazancının belirli bir kısmının vergiden istisna edilmesi, son yılların en önemli teşvik araçlarından biri haline geldi. Ancak istisnanın uygulanabilmesi için hizmetin gerçekten yurtdışındaki bir müşteriye sunulması ve bedelin Türkiye’ye getirilmesi gerekiyor.',
        'Projeye başlamadan önce düzenlenecek sözleşmede; hizmet kapsamı, teslim şekli, fikri mülkiyet hakları ve ödeme planı açıkça tanımlanmalı. Faturaların döviz cinsinden düzenlenmesi, banka dekontlarıyla uyumlu olması ve gerektiğinde transfer fiyatlandırması dokümantasyonuna entegre edilebilmesi kritik önem taşıyor.',
      ],
    },
    en: {
      title:
        '2025 tax incentives for software exports: 7 strategic points for service providers',
      excerpt:
        'Turkish companies exporting software, design and technology services may benefit from tax exemptions of up to 80%. To fully utilise these incentives, contracts, invoicing and proof of service delivery must strictly follow regulatory requirements.',
      body: [
        'For Turkish companies exporting software and technology services, partial exemption of corporate profits has become a key incentive. To apply the exemption correctly, the service must be rendered to a non‑resident client and the consideration should be brought into Turkey through acceptable channels.',
        'Well‑drafted contracts specifying the scope of work, intellectual property rights and milestones are essential. Invoices should be consistent with these contracts and supported by bank receipts, delivery reports or system logs that prove the actual performance of the service.',
      ],
    },
  },
  {
    id: 'enflasyon-duzeltmesi-isletmeler-icin-yeni-donem',
    slug: 'enflasyon-duzeltmesi-isletmeler-icin-yeni-donem',
    date: '2025-03-31',
    category: 'Muhasebe Haberleri',
    externalUrl: 'https://muhasebece.com/enflasyon-duzeltmesi-isletmeler-icin-yeni-donem/',
    sources: [
      {
        label:
          'Resmî Gazete – Vergi Usul Kanunu Genel Tebliği (Sıra No: 561) (25.05.2024 tarihli, enflasyon düzeltmesi hükümleri)',
        url: 'https://www.resmigazete.gov.tr/eskiler/2024/05/20240525-29.htm',
      },
      {
        label:
          'Resmî Gazete – Vergi Usul Kanunu Genel Tebliği (Sıra No: 571) (19.10.2024 tarihli, enflasyon düzeltmesine ilişkin ek açıklamalar)',
        url: 'https://www.resmigazete.gov.tr/eskiler/2024/10/20241019-9.htm',
      },
    ],
    tr: {
      title: 'Enflasyon düzeltmesi: İşletmeler için yeni dönem',
      excerpt:
        'Yüksek enflasyon dönemlerinde mali tabloların gerçeği yansıtması zorlaştığı için, enflasyon düzeltmesi uygulaması tekrar gündeme geliyor. Uzun vadeli varlık ve borçların enflasyona göre düzeltilmesi, şirketlerin gerçek performansını göstermek açısından kritik hale geliyor.',
      body: [
        'Enflasyon düzeltmesi, yüksek enflasyon dönemlerinde bilançoda yer alan parasal olmayan kalemlerin bugünkü satın alma gücüne göre yeniden ifade edilmesini amaçlar. Böylece sermaye, stok ve demirbaş gibi kalemlerin enflasyon karşısında eriyen kısmı tespit edilebilir.',
        'Uygulama sonucunda oluşan enflasyon düzeltme farkları, şirketin vergi matrahı ve dağıtılabilir kârı üzerinde önemli etki yaratabilir. Bu nedenle düzeltme yapılırken hem muhasebe standartları hem de vergi mevzuatı birlikte değerlendirilmelidir.',
      ],
    },
    en: {
      title: 'Inflation adjustment: A new chapter for financial statements',
      excerpt:
        'In times of high inflation it becomes harder for financial statements to reflect the true position of a business. Inflation adjustment aims to restate long-term assets and liabilities so that companies can present more realistic performance figures.',
      body: [
        'Inflation adjustment is used in high‑inflation economies to restate non‑monetary items in the balance sheet so that they reflect the current purchasing power. This helps stakeholders understand how much of the equity and fixed assets have been eroded by inflation.',
        'Because inflation adjustment may significantly change profit figures and tax bases, businesses need to align accounting policies with local tax rules and carefully explain the impact in their management reports.',
      ],
    },
  },
];
