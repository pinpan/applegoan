<?php
/**
* Ukázkový skript pro mBank API
*/
include 'class_mbank.php';

$mb = new mBank("vase_prihlasovaci_cislo", "vase_heslo");
// $mb = new mBank("vase_prihlasovaci_cislo", "vase_heslo", "SK"); // pokud jde o slovenskou mBank
// $mb = new mBank("vase_prihlasovaci_cislo", "vase_heslo", "PL"); // pokud jde o polskou mBank

$mb->setEncoding('UTF-8'); // nebo CP1250

$mb->setProfile(1); // nastaví firemní profil (nutné jen pokud máte osobní a firemní účet)

$ucty = $mb->getAccounts(); // seznam účtů a jejich zůstatky
print_r($ucty);

$ucet = '1234567890'; // číslo účtu bez předčíslí

$transakce = $mb->getTransactions($ucet, -14); // seznam transakcí za posledních 14 dní

$transakce = $mb->getTransactions($ucet, '2017-01-01', '2017-12-31'); // seznam transakcí za rok

/*
$transakce vypada nějak takto:
[1] => Array
(
   [datum] => 2017-08-02 // datum uskutečnění
   [zauctovani] => 2017-08-02 // datum zaúčtování
   [platce_prijemce] => JAN NOVÁK
   [platce_prijemce_ucet] => 000000-1109080801/4000
   [popis] => PŘÍCHOZÍ PLATBA Z JINÉ BANKY
   [zprava] =>
   [ks] =>
   [vs] => 2111498
   [ss] =>
   [castka] => 3500
   [zustatek] => 2190751,32
)
*/

// originál CSV export za posledních 31 dní
$csv_obsah = $mb->getTransactionsCSV($ucet, -31);

// příklad PDF exportu od začátku roku
$obsah = $mb->getTransactionsPDF($ucet, '2017-01-01');
file_put_contents('export.pdf', $obsah);


//---------- PROVEDENÍ PLATBY
$contacts = $mb->getFavoriteContacts(); // seznam oblíbených kontaktů a účtů
$contacts[0]->amount(100.5)->pay(); // pošle 100,50 CZK na první kontakt

// NEBO takto:
$contact = $mb->findContact("Jan Novák"); // najde kontakt s tímto jménem
print_r($contact);

// pošle 50 Kč na "Jan Novák" s popisem transakce a VS, z účtu 22010303/6210
$contact->vs("012016")->title("my automated payment")->amount(50)->from("22010303")->pay();

// pošle 120 Kč na "Jan Novák" s popisem transakce a VS, z výchozího účtu
$contact->vs("022016")->title("my automated payment 2")->amount(120)->pay();


/**
* FUNCTION LIST SUMMARY
*/
void $mb->setEncoding( string $encoding ) // default is UTF-8, can be CP1250 etc.
bool $mb->setProfile( int $profile_id ) // sets personal or company profile
array $mb->getAccounts() // list of account numbers and totals
array $mb->getTransactions( string $account_number, int $x_days_ago ) // gets all the transactions
array $mb->getTransactions( string $account_number, string $date_from )
array $mb->getTransactions( string $account_number, string $date_from, string $date_to )
string $mb->getTransactionsCSV( ... ) // same parameters as transactions() - returns CSV text
string $mb->getTransactionsPDF( ... ) // same parameters as transactions() - returns PDF file
string $mb->getTransactionsABO( ... ) // same parameters as transactions() - returns ABO file
array $mb->getFavoriteContacts() // returns favorite contacts

// Finds favorite contact (if that contact name has more bank accounts also input $bankAccountName)
object $contact = $mb->findContact( string $contactName, string $bankAccountName = null)
$contact->from( string $account_number) // sets payer account (not needed, first available will be used)
$contact->ss( string $specific_symbol ) // sets specific symbol
$contact->vs( string $variable_symbol ) // sets variable symbol
$contact->ks( string $constant_symbol ) // sets constant symbol
$contact->title( string $payment_description ) // sets payment text
$contact->amount( float $amount) // sets payment amount
$contact->pay() // executes the payment
