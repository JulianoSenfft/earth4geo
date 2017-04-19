<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa user o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações
// com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'creartcode_earth4geo');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'creartcode_earth4geo');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'w#$rdse');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+Pqj+)OWP4;W#zGj$}ooZ[DXTae?vG{WNI!`<VpOm~_!t|j_ZnOTg.O$|8h/wCqq');
define('SECURE_AUTH_KEY',  ':<=`O~CdF<(y@AD{UWv4rmD10plLgDLejEXaUR.J8yr~>D}RYwP :X%X#IWfahp^');
define('LOGGED_IN_KEY',    '[LP]isk`0TgbR@mZ]3$WwuPJW=hJRXEFU#]Jztt9c&G-)Rh6.hrX$<8kYc|Aq5>b');
define('NONCE_KEY',        'FEb{q`/8_>N|lw12a=s`2p0vz~*Iz$H-$T82,uL6cz4;g5F?0BV1<{(k?B^59)Oe');
define('AUTH_SALT',        '@%O3B4j&~?FvhGww`Z):W``h[hyuro-LAnqcClc(^><rd)iZX,DpEz.BxW20&$19');
define('SECURE_AUTH_SALT', 'w?UIwuT]r{f&M_7-|HYI=Q[y$o0 J5@_0G#.vd+1k{U[sbL=3u< ,TKa9rQR}GUZ');
define('LOGGED_IN_SALT',   'QI&AL*@]h)/71V=gGXlH,.i484;FH%Bofc$-tdHRRsY.k2-0v.z&:Y;``1Q,Nlnk');
define('NONCE_SALT',       'e/sg)yk4es;=Y[V<!p9oem1pp0|NRC&ihv=$?4^LbJoFFVbqNNc632?Yy@goQu];');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * para cada um um único prefixo. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo debugging WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
