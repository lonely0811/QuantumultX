function operator(proxies) {
  proxies.forEach(proxy => {
    const star = proxy.name.indexOf('prefix
    proxy.name = proxy.name
        replace(/^🇻🇳.*$/g, '🇻🇳VN')
    proxy.name += star ? ' *' : '';
  });
  return proxies;
}
